const authRoutes = require("./routes/authRoutes");
const leaderRoutes = require("./routes/leaderRoutes");
const taskRoutes = require("./routes/taskRoutes");
const memberRoutes = require("./routes/memberRoutes");

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/leader", leaderRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/member", memberRoutes);

app.get("/", (req, res) => {
  res.send("🚀 TeamSync Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});