require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const API_BASE_URL = 'http://localhost:5000';
const bcrypt = require("bcryptjs");
const axios = require('axios');
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const { OAuth2Client } = require('google-auth-library');
const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);
// const Test = require('./models/Test');
const multer = require("multer");

const Temp = require('./models/Temp');
// const path = require("path");
const methodOverride = require("method-override");

// const Admin = require("./models/Admin");
const User = require("./models/User");
// const Problem = require("./models/Problem");
// const SuperAdmin = require("./models/SuperAdmin");
const { appendFileSync } = require("fs");
const Volunteer = require("./models/Volunteer");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const authMiddleware = (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token)
    return res.status(401).json({ message: "Unauthorized: No token provided" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
app.post('/upload', upload.single('photo'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({ path: req.file.path });
});



app.get("/user/signup", (req, res) => res.render("log/userSignup"));

app.post('/user/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();
    
    // Redirect or send response as needed
    res.redirect('/login');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed', details: error.message });
  }
});

const authenticateUser = (req, res, next) => {
  const token = req.cookies.authToken;
  if (!token) return res.redirect("/login");

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.redirect("/login");
    if (decoded.role !== "user") return res.redirect("/login");
    req.user = {
      _id: decoded.id,  // Set the user ID from the decoded token
      email: decoded.email
    };
    next();
  });
};


app.get("/user/dashboard", authenticateUser, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.redirect("/login");

    // Fetch emergency requests (either all or filtered by user)
    const emergencyRequests = await axios.get(`${API_BASE_URL}/api/get_rescue_requests`, {
      params: { email: user.email } // Filter by user's email
    });

    res.render("userDashboard", { 
      user,
      emergencyRequests: emergencyRequests.data.requests,
      requestCount: emergencyRequests.data.count
    });
  } catch (err) {
    console.error('Dashboard error:', err);
    res.status(500).send("Server error");
  }
});


app.get("/logout", (req, res) => {
  // Clear the auth token cookie
  res.clearCookie("authToken", { path: "/" });
  

  oauth2Client.setCredentials({});
  
  res.redirect("/home");
});

app.get("/clear-cookies", (req, res) => {
  res.clearCookie("authToken");
  res.send("Cookies have been cleared");
});

app.get("/auth/check-role", (req, res) => {
  const token = req.cookies.authToken;

  if (!token)
    return res.status(401).json({ message: "Unauthorized: No token" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Verified User:", verified);
    res.json({ role: verified.role });
  } catch (err) {
    console.error("JWT Verification Failed:", err);
    res.status(401).json({ message: "Invalid token" });
  }
});

app.get("/home", (req, res) => {
  res.render("home/home.ejs");
});




// Signup Page
app.get('/signup', (req, res) => {
  res.render('signup', { error: req.query.error });
});

// Initiate Google OAuth
app.get('/auth/google', (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['profile', 'email'],
    prompt: 'select_account'
  });
  res.redirect(authUrl);
});


app.get('/auth/google/callback', async (req, res) => {
  const { code } = req.query;

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const { data } = await oauth2Client.request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo',
    });

    // Check if user exists in User collection (regular users)
    let user = await User.findOne({ email: data.email });
    
    if (!user) {
      // If not, check/create in Temp collection
      user = await Temp.findOne({ email: data.email });
      
      if (!user) {
        user = new Temp({
          name: data.name,
          email: data.email,
          picture: data.picture,
          authMethod: 'google',
          verified: true
        });
        await user.save();
      }
    }

    // Create token
    const token = jwt.sign(
      { 
        id: user._id, 
        role: user instanceof User ? 'user' : 'temp',
        email: user.email
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Set cookie
    res.cookie("authToken", token, { 
      httpOnly: true, 
      maxAge: 3600000,
      sameSite: 'lax', // or 'none' if using HTTPS
      secure: process.env.NODE_ENV === 'production' // secure in production
    });

    res.redirect('/user/dashboard');
  } catch (err) {
    console.error('Google auth error:', err);
    res.redirect('/login?error=auth_failed');
  }
});
app.get('/auth/google/callback', async (req, res) => {
  try {
    const { code } = req.query;
    const { tokens } = await oauth2Client.getToken(code);
    
    // You would typically save the user to your database here
    console.log('Authentication successful', tokens);
    
    res.redirect('/user/dashboard');
  } catch (err) {
    console.error('Error:', err);
    res.redirect('/login?error=auth_failed');
  }
});

// Email/Password Login
// Remove this route (keep only the /login route below)
// app.get("/user/login", (req, res) => res.render("log/userLogin"));

// Update the login route to handle both regular and user logins
app.get('/login', (req, res) => {
  // You can use the same login page for both, or add logic to differentiate if needed
  res.render('login', { error: req.query.error });
});

// Update the login POST route to handle both types of authentication
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // First try to find in User collection (regular users)
    let user = await User.findOne({ email });
    let userType = 'user';

    // If not found in User collection, try Temp collection (if you have other types)
    if (!user) {
      user = await Temp.findOne({ email });
      userType = 'temp';
    }

    if (!user) {
      return res.redirect('/login?error=Invalid credentials');
    }

    // Handle password comparison based on user type
    let isMatch;
    if (userType === 'user') {
      isMatch = await bcrypt.compare(password, user.password);
    } else if (userType === 'temp' && user.authMethod === 'email') {
      isMatch = await user.comparePassword(password);
    } else {
      return res.redirect('/login?error=Invalid login method');
    }

    if (!isMatch) {
      return res.redirect('/login?error=Invalid credentials');
    }

    // Create token based on user type
    const token = jwt.sign(
      { 
        id: user._id, 
        role: userType === 'user' ? 'user' : 'temp',
        email: user.email
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("authToken", token, { httpOnly: true, maxAge: 3600000 });
    
    // Redirect based on user type
    if (userType === 'user') {
      res.redirect('/user/dashboard');
    } else {
      res.redirect('/dashboard'); // Or wherever temp users should go
    }
  } catch (err) {
    console.error('Login error:', err);
    res.redirect('/login?error=Server error');
  }
});

// Email/Password Signup
app.post('/signup', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  
  if (password !== confirmPassword) {
    return res.redirect('/signup?error=Passwords do not match');
  }

  try {
    let user = await Temp.findOne({ email });
    if (user) {
      return res.redirect('/signup?error=User already exists');
    }

    user = new Temp({
      name,
      email,
      password,
      authMethod: 'email'
    });

    await user.save();

    req.session.user = {
      id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture || '/images/default-avatar.png'
    };

    res.redirect('/dashboard');
  } catch (err) {
    console.error('Signup error:', err);
    res.redirect('/signup?error=Server error');
  }
});

app.get("/", (req, res) => res.redirect("https://kzmm0cohqvt4s0f3meet.lite.vusercontent.net/"));

app.get("/admin/dashboard", authenticateUser, async (req, res) => {
    try {
        const volunteers = await Volunteer.find({ addedBy: req.user._id });
        res.render("admin", { 
            user: req.user,
            volunteers: volunteers
        });
    } catch (error) {
        console.error('Error fetching volunteers:', error);
        res.status(500).send('Server Error');
    }
});


app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find({}, 'name email'); // Only fetch name and email
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
});


// Get all orders (for delivery dashboard)


// Error Middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message || err); // Log the error for debugging
  const statusCode = err.statusCode || 500; // Default to 500 if no status code is provided
  const message = err.message || "Internal Server Error"; 

  // Render the error page with the error details
  res.status(statusCode).render("error", {
    statusCode,
    message,
  });
});

app.post('/admin/add-volunteer', authenticateUser, async (req, res) => {
  try {
      const { name, email, phone, availability } = req.body;
      
      const volunteer = new Volunteer({
          name,
          email,
          phone,
          availability,
          addedBy: req.user._id
      });

      await volunteer.save();
      res.json({ message: 'Volunteer added successfully', volunteer });
  } catch (error) {
      console.error('Error adding volunteer:', error);
      res.status(500).json({ message: 'Server Error' });
  }
});

// Add route to delete volunteer
app.delete('/admin/volunteer/:id', authenticateUser, async (req, res) => {
    try {
        const volunteer = await Volunteer.findOneAndDelete({
            _id: req.params.id,
            addedBy: req.user._id
        });

        if (!volunteer) {
            return res.status(404).json({ message: 'Volunteer not found' });
        }

        res.json({ message: 'Volunteer deleted successfully' });
    } catch (error) {
        console.error('Error deleting volunteer:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});
// Get all volunteers for the admin
app.get('/admin/volunteers', authenticateUser, async (req, res) => {
  try {
      const volunteers = await Volunteer.find({ addedBy: req.user._id });
      res.json(volunteers);
  } catch (error) {
      console.error('Error fetching volunteers:', error);
      res.status(500).json({ message: 'Server Error' });
  }
});

// Volunteer routes
app.post('/api/volunteers', async (req, res) => {
    try {
        const { name, email, phone, availability, latitude, longitude } = req.body;

        // No required field validation

        // Create new volunteer
        const volunteer = new Volunteer({
            name,
            email,
            phone,
            availability,
            latitude,
            longitude,
            addedBy: req.user ? req.user._id : undefined // Only set if available
        });

        await volunteer.save();
        res.status(201).json({ message: 'Volunteer registered successfully' });
    } catch (error) {
        console.error('Error adding volunteer:', error);
        res.status(500).json({ message: error.message });
    }
});

app.listen(process.env.PORT || 5000, () => console.log("Server running"));
