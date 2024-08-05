const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(
      `CONNECTED TO THE MONGODB DATABASE: ${mongoose.connection.host}`.green
    );
  } catch (error) {
    console.log(`MongoDB Database Error: ${error.message}`.bgRed.white);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
