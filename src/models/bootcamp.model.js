import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.config.js';


export const Bootcamp = sequelize.define('bootcamp', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  cue: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true,
});

