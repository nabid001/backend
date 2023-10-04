import dotenv from "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import goalRouter from "./router/goalRouters.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }));

app.use(errorMiddleware);

app.use("/api/goals", goalRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
