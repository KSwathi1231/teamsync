const Member = require("../models/Member");

const getDashboard = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Leader Dashboard API Working",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getLeaderProfile = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Leader Profile API Working",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateLeaderProfile = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Update Leader Profile API Working",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMyTeam = async (req, res) => {
  try {

    const members = await Member.find({
      teamId: req.user.teamId,
    })
    .select("-password")
    .sort({ fullName: 1 });

    return res.status(200).json({
      success: true,
      totalMembers: members.length,
      members,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getAnalytics = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Analytics API Working",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
  getLeaderProfile,
  updateLeaderProfile,
  getMyTeam,
  getAnalytics,
};