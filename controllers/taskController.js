const Task = require('../models/task');

exports.createTask = async (req, res) => {
  try {
    const { title, description, categoryId } = req.body;
    const task = await Task.create({ title, description, categoryId });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
};

exports.getTasksByUser = async (req, res) => {
  try {
    const userId = 1;
    const tasks = await Task.findAll({
      where: { userId },
      include: ['Category'],
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las tareas del usuario' });
  }
};

exports.updateTaskCompletion = async (req, res) => {
  try {
    const { completed } = req.body;
    const taskId = req.params.id;

    await Task.update({ completed }, { where: { id: taskId } });

    res.status(200).json({ message: 'Tarea actualizada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la tarea' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    await Task.destroy({ where: { id: taskId } });
    res.status(200).json({ message: 'Tarea eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
};