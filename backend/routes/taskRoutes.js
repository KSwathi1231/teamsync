const express = require("express");

const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Task
router.post("/create", authMiddleware, createTask);

// Get All Tasks
router.get("/", authMiddleware, getAllTasks);

// Update Task
router.put("/:taskId", authMiddleware, updateTask);

// Delete Task
router.delete("/:taskId", authMiddleware, deleteTask);

module.exports = router;