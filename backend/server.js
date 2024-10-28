import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import authroutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser()); //allows us to parse incoming cookies

app.use("/api/auth", authroutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is operational:", PORT);
});
