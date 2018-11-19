import Sequelize from 'sequelize';
import db from './db';

const Users = db.define('users',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: Sequelize.STRING(30),
      field: 'first_name',
    },
    secondName: {
      type: Sequelize.STRING(30),
      field: 'second_name',
    },
    email: Sequelize.STRING(50),
    role: Sequelize.INTEGER,
    password: Sequelize.STRING(300),
  },
  {
    timestamps: false,
  });

export default Users;
