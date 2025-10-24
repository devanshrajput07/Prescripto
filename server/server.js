import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Connect Database
connectDB();
// Connect Cloudinary
connectCloudinary();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Prescripto is working!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
