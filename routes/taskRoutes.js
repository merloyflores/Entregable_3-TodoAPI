const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getTasksByUser);
router.put('/tasks/:id', taskController.updateTaskCompletion);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;

