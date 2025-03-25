import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const mongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
       });

    console.log("✅ Connected to MongoDB");

    const db = mongoose.connection.db;

    // Fetch food data
    const foodCollection = db.collection("food");
    const foodData = await foodCollection.find({}).toArray();

    // Fetch category data
    const categoryCollection = db.collection("Category_food");
    const categoryData = await categoryCollection.find({}).toArray();

    // Assign to global variables
    global.food = foodData;
    global.food_category = categoryData;

  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err);
  }
};

export default mongodb;
