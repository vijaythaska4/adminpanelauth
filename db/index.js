import mongoose from "mongoose";
export default async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
  }
  catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err
  }
}



