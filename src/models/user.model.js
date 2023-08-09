import { sequelize } from '../config/db.config.js';
import { DataTypes } from 'sequelize';
import { Bootcamp } from './bootcamp.model.js'

export const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  correo: {
    type: DataTypes.STRING,
  },
  //bootcampId: {
    //type: DataTypes.INTEGER,
  //},

}, {
  timestamps: false,
});




