const express = require("express");

const {
  registerLeader,
  leaderLogin,
  memberLogin,
  createMemberPassword,
} = require("../controllers/authController");

const router = express.Router();

// Team Registration
router.post("/registerLeader", registerLeader);

// Leader Login
router.post("/leaderLogin", leaderLogin);

// Member Login
router.post("/memberLogin", memberLogin);

// Member First Time Password Setup
router.post("/createMemberPassword", createMemberPassword);

module.exports = router;