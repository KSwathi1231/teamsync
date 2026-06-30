const express = require("express");

const {
  getDashboard,
  getLeaderProfile,
  updateLeaderProfile,
  getMyTeam,
  getAnalytics,
} = require("../controllers/leaderController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Dashboard
router.get("/dashboard", authMiddleware, getDashboard);

// Profile
router.get("/profile", authMiddleware, getLeaderProfile);
router.put("/profile", authMiddleware, updateLeaderProfile);

// My Team
router.get("/myteam", authMiddleware, getMyTeam);

// Analytics
router.get("/analytics", authMiddleware, getAnalytics);

module.exports = router;