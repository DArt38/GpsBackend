const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  const mongoUri = process.env.MONGO_URI;
  mongoose.connect(mongoUri);
  const Coordinate = require('../models/coordinate');
};

module.exports = connectDB;
