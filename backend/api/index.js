import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import enquiryRouter from "../routes/enquiryRoute.js";
import { connectDb } from "../db/db.js";

const app = express();

connectDb();

app.use(cors({
  origin: ["https://your-old-site-name.netlify.app"],
  credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use("/api", enquiryRouter);

export default app;