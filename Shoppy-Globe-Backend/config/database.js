import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const connectDb = await mongoose.connect("mongodb://localhost:27017/Shoppy-globe");

    console.log(
      "MongoDB Connected"
    );
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;