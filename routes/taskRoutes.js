// routes/tasks.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Route to handle task creation
router.post('/add', async (req, res) => {
  const { content, status, dueDate } = req.body;

  try {
    const newTask = new Task({
      content,
      status,
      dueDate,
    });

    await newTask.save();

    res.status(201).json({ message: 'Task added successfully', newTask });
  } catch (error) {
    res.status(500).json({ message: 'Error adding task', error });
  }
});

module.exports = router;