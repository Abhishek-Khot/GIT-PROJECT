const mongoose = require("mongoose");
const SuperAdmin = require("./models/SuperAdmin");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const existingSuperAdmin = await SuperAdmin.findOne({ email: "khotabhishek15@example.com" });

    if (!existingSuperAdmin) {
      await SuperAdmin.create({
        name: "abhi",
        email: "khotabhishek15.com",
        password: "12345" // Store password as plain text
      });

      console.log("SuperAdmin created successfully!");
    } else {
      console.log("SuperAdmin already exists!");
    }

    mongoose.disconnect();
  })
  .catch(err => console.error("Database connection error:", err));
