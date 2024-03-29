const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const connectDB = async () => {
  const url = `mongodb://localhost:27017/monsters`;
  try {
    const connection = await mongoose.connect(url, {
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (e) {
    console.log("Failed to connect database:", e);
  }
};

module.exports = {
  connectDB
};