import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import authroutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/auth", authroutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is operational:", PORT);
});
