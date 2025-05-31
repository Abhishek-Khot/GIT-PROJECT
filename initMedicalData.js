// initMedicalData.js
const mongoose = require('mongoose');
const MedicalReport = require('./models/MedicalReport');
require('dotenv').config();

async function initializeData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    const userId = '68281daa48498bd7869adfac'; // Your specific user ID

    const medicalData = {
      userId,
      medications: [
        {
          name: "Capecitabine",
          dosage: "500mg",
          schedule: { time: "08:00 AM", period: "morning", withFood: true },
          remainingDoses: 25,
          diet: "Take with food",
          precision: "±30 minutes"
        },
        {
          name: "Cyclophosphamide",
          dosage: "100mg",
          schedule: { time: "12:00 PM", period: "afternoon", withFood: false },
          remainingDoses: 7,
          diet: "Empty stomach",
          precision: "±15 minutes"
        }
        // Add other medications as needed
      ]
    };

    // Check if data already exists
    const existingReport = await MedicalReport.findOne({ userId });
    if (existingReport) {
      console.log('Medical data already exists for this user');
      return;
    }

    // Create new medical report
    const report = new MedicalReport(medicalData);
    await report.save();
    console.log('Successfully initialized medical data');

  } catch (error) {
    console.error('Initialization error:', error);
  } finally {
    mongoose.disconnect();
    process.exit(0);
  }
}

initializeData();