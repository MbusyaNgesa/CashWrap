import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello Ngesa");
});

app.listen(PORT, () => {
  connectDB();
  console.log("Server is operational:", PORT);
});
