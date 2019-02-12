import Sequelize from 'sequelize';
import db from './db';

const Orders = db.define('orders',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    author: {
      type: Sequelize.INTEGER,
      field: 'author',
    },
    text: {
      type: Sequelize.STRING(2000),
      field: 'text',
    },
    time: {
      type: Sequelize.INTEGER,
      field: 'time',
    },
    header: {
      type: Sequelize.STRING(50),
      field: 'header',
    },
    price: {
      type: Sequelize.INTEGER,
      field: 'price',
    },
  },
  {
    timestamps: false,
  });

export default Orders;
