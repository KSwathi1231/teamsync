const Task = require("../models/Task");
const Member = require("../models/Member");

const createTask = async (req, res) => {
  try {

    const {
      title,
      description,
      assignedTo,
      numberOfDays,
      priority,
    } = req.body;

    // Validation
    if (!title || !description || !assignedTo || !numberOfDays) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Find member by email
    const member = await Member.findOne({
      email: assignedTo,
      teamId: req.user.teamId,
    });

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found in your team.",
      });
    }

    // Calculate Due Date
    const dueDate = new Date();
    dueDate.setDate(
      dueDate.getDate() + Number(numberOfDays)
    );

    // Save Task
    const task = await Task.create({
      teamId: req.user.teamId,
      assignedTo: member._id,
      assignedBy: req.user.leaderId,
      title,
      description,
      priority,
      dueDate,
    });

    return res.status(201).json({
      success: true,
      message: "Task created successfully.",
      task,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getAllTasks = async (req, res) => {
  try {

    const tasks = await Task.find({
      teamId: req.user.teamId,
    })
      .populate("assignedTo", "fullName email")
      .populate("assignedBy", "fullName email")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      totalTasks: tasks.length,
      tasks,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const updateTask = async (req, res) => {
  try {

    const { taskId } = req.params;

    const {
      title,
      description,
      assignedTo,
      numberOfDays,
      priority,
    } = req.body;

    // Find Task
    const task = await Task.findOne({
      _id: taskId,
      teamId: req.user.teamId,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    // Find Member
    const member = await Member.findOne({
      email: assignedTo,
      teamId: req.user.teamId,
    });

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Assigned member not found.",
      });
    }

    // Calculate new due date
    const dueDate = new Date();
    dueDate.setDate(
      dueDate.getDate() + Number(numberOfDays)
    );

    // Update fields
    task.title = title;
    task.description = description;
    task.assignedTo = member._id;
    task.priority = priority;
    task.dueDate = dueDate;

    await task.save();

    return res.status(200).json({
      success: true,
      message: "Task updated successfully.",
      task,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const deleteTask = async (req, res) => {
  try {

    const { taskId } = req.params;

    // Find the task belonging to the logged-in leader's team
    const task = await Task.findOne({
      _id: taskId,
      teamId: req.user.teamId,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found.",
      });
    }

    // Delete task
    await Task.findByIdAndDelete(taskId);

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully.",
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
};