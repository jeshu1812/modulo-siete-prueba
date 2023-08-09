import { sequelize } from '../config/db.config.js';
import { DataTypes } from 'sequelize';


export const newUser = sequelize.define('newuser', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  usuarios: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false,
});
