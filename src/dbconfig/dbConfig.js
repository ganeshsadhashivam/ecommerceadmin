import mongoose, { connection } from "mongoose";

export default connect = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);

    const connection = mongoose.Connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
      connection.on("error", (err) => {
        console.log("MongoDB connection error g went wrong");
        console.log(err);
      });
    });
  } catch (error) {
    console.log("something went wrong");
    console.log(error);
  }
};
