// import mongoose, { connection } from "mongoose";

// export const connect = () => {
//   try {
//     mongoose.connect(process.env.MONGO_URI);

//     const connection = mongoose.connection;

//     connection.on("connected", () => {
//       console.log("MongoDB connected successfully");
//       connection.on("error", (err) => {
//         console.log("MongoDB connection error g went wrong");
//         console.log(err);
//       });
//     });
//   } catch (error) {
//     console.log("something went wrong");
//     console.log(error);
//   }
// };

import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
  }
}
