// mongodb+srv://alisobh21:123456Ali@cluster0.51jondu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://alisobh21:123456Ali@cluster0.51jondu.mongodb.net/food-del"
    )
    .then(() => console.log("Database connected"));
};
