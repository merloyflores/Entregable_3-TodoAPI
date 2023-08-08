const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Category = require('./category');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Task.belongsTo(Category, { foreignKey: 'categoryId', allowNull: false });

module.exports = Task;
