const mongoose = require('mongoose');

const uri = "mongodb+srv://pmandlik:Charmsheritage%406696%23@eshop-cluster0.dr2ihti.mongodb.net/fantasticeshop?retryWrites=true&w=majority&appName=eshop-cluster0";

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
}

module.exports = connectDB;