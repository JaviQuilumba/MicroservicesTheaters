const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Cinema = sequelize.define('Cinema', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'movie_theaters',
  timestamps: false,
});

module.exports = Cinema;
