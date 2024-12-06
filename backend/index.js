import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDb } from "./db/connectDB.js";
import auth from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// app.get("/", (req, res) => {
//   res.json({message: "Hello World"});
// });

// Middleware
app.use(cors({origin: "http://localhost:5173", credentials: true}));
app.use(cookieParser());
app.use(express.json()); // For parsing JSON

//auth signup,login, logout routes
app.use("/api/auth/", auth);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "dist")));

  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

//Server Listening
app.listen(PORT, () => {
  connectDb();
  console.log("Server is running on " + PORT);
});



