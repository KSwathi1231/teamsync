const Member = require("../models/Member");
const Task = require("../models/Task");

const getMemberDashboard = async (req, res) => {
  try {

    // Logged-in member
    const member = await Member.findById(req.user.memberId)
      .select("-password");

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found.",
      });
    }

    // Count tasks
    const assignedTasks = await Task.countDocuments({
      assignedTo: member._id,
    });

    const completedTasks = await Task.countDocuments({
      assignedTo: member._id,
      status: "Completed",
    });

    const pendingTasks = await Task.countDocuments({
      assignedTo: member._id,
      status: "Pending",
    });

    const inProgressTasks = await Task.countDocuments({
      assignedTo: member._id,
      status: "In Progress",
    });

    return res.status(200).json({
      success: true,

      member: {
        fullName: member.fullName,
        email: member.email,
        teamId: member.teamId,
      },

      stats: {
        assignedTasks,
        completedTasks,
        pendingTasks,
        inProgressTasks,
      },
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getMemberTasks = async (req, res) => {
  try {

    // Find logged-in member
    const member = await Member.findById(req.user.memberId);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found.",
      });
    }

    // Get tasks
    const tasks = await Task.find({
      assignedTo: member._id,
    })
      .populate("assignedBy", "fullName email")
      .sort({ createdAt: -1 });

    // Today's date (ignore time)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Add extra fields
    const updatedTasks = tasks.map((task) => {

      const dueDate = new Date(task.dueDate);
      dueDate.setHours(0, 0, 0, 0);

      const isOverdue =
        task.status !== "Completed" &&
        dueDate < today;

      const remainingDays = Math.ceil(
        (dueDate - today) / (1000 * 60 * 60 * 24)
      );

      return {
        ...task.toObject(),

        assignedBy: task.assignedBy,

        isOverdue,

        remainingDays:
          task.status === "Completed"
            ? 0
            : remainingDays,
      };
    });

    return res.status(200).json({
      success: true,
      totalTasks: updatedTasks.length,
      tasks: updatedTasks,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const updateTaskStatus = async (req, res) => {
  try {

    const { taskId } = req.params;
    const { status } = req.body;

    // Allowed statuses
    const validStatuses = [
      "Pending",
      "In Progress",
      "Completed",
    ];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid task status.",
      });
    }

    // Logged-in member
    const member = await Member.findById(req.user.memberId);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found.",
      });
    }

    // Find assigned task
    const task = await Task.findOne({
      _id: taskId,
      assignedTo: member._id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    // Allowed transitions
    const transitions = {
      "Pending": "In Progress",
      "In Progress": "Completed",
      "Completed": null,
    };

    if (transitions[task.status] !== status) {
      return res.status(400).json({
        success: false,
        message: `Task can only move from "${task.status}" to "${transitions[task.status] || "No further status"}".`,
      });
    }

    // Update status
    task.status = status;

    // Save timestamps
    if (status === "In Progress" && !task.startedAt) {
      task.startedAt = new Date();
    }

    if (status === "Completed") {
      task.completedAt = new Date();
    }

    await task.save();

    return res.status(200).json({
      success: true,
      message: "Task status updated successfully.",
      task,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getMemberProfile = async (req, res) => {
  try {

    const member = await Member.findById(req.user.memberId)
      .select("-password");

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found.",
      });
    }

    return res.status(200).json({
      success: true,
      member,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const updateMemberProfile = async (req, res) => {
  try {

    const { fullName } = req.body;

    const member = await Member.findById(req.user.memberId);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found.",
      });
    }

    if (fullName) {
      member.fullName = fullName.trim();
    }

    await member.save();

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      member,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getMyContribution = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "My Contribution API Working",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const submitStandup = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Submit Standup API Working",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getStandupHistory = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Standup History API Working",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getMemberDashboard,
  getMemberTasks,
  updateTaskStatus,
  getMemberProfile,
  updateMemberProfile,
  getMyContribution,
  submitStandup,
  getStandupHistory,
};