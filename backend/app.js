const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes.js");
const linkRoutes = require("./routes/linkRoutes.js");
const shopRoutes = require("./routes/shopRoutes.js");
const cors = require("cors");
dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running" });
});
app.use("/api/auth", authRoutes);
app.use("/api/links", linkRoutes);
app.use("/api/shops", shopRoutes);

app.use((err, req, res, next) => {
  console.log("Error in ", req.url, err.message);
  res.status(400).json({ message: err.message });
});

module.exports = app;