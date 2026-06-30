const express = require("express");

const {
  getMemberDashboard,
  getMemberTasks,
  updateTaskStatus,
  getMemberProfile,
  updateMemberProfile,
  getMyContribution,
  submitStandup,
  getStandupHistory,
} = require("../controllers/memberController");

const authMiddleware = require("../middleware/authMiddleware");
const memberMiddleware = require("../middleware/memberMiddleware");

const router = express.Router();

// Dashboard
router.get(
  "/dashboard",
  authMiddleware,
  memberMiddleware,
  getMemberDashboard
);

// My Tasks
router.get(
  "/tasks",
  authMiddleware,
  memberMiddleware,
  getMemberTasks
);

// Update Task Status
router.put(
  "/tasks/:taskId/status",
  authMiddleware,
  memberMiddleware,
  updateTaskStatus
);

// Profile
router.get(
  "/profile",
  authMiddleware,
  memberMiddleware,
  getMemberProfile
);

router.put(
  "/profile",
  authMiddleware,
  memberMiddleware,
  updateMemberProfile
);

// My Contribution
router.get(
  "/contribution",
  authMiddleware,
  memberMiddleware,
  getMyContribution
);

// Daily Standup
router.post(
  "/standup",
  authMiddleware,
  memberMiddleware,
  submitStandup
);

// Standup History
router.get(
  "/standups",
  authMiddleware,
  memberMiddleware,
  getStandupHistory
);

module.exports = router;