//aca vamos a conectar sequielize 
import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'db_bootcamp',
    'postgres', 
    'mariajesus', 
    { //este objeto me va a traer unas propiedades
host: 'localhost',
dialect: 'postgres'
});