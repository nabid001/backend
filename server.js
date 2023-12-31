import dotenv from "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import goalRouter from "./router/goalRouters.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import userRouters from "./router/userRouters.js";

connectDB();

const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }));

app.use(errorMiddleware);

app.use("/api/goals", goalRouter);
app.use("/api/users", userRouters);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
