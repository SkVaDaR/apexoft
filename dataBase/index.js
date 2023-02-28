const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:postgrespw@localhost:32768/postgres', {
  host: 'localhost',
  dialect: 'postgres',
});
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = {
  up: sequelize.define('people', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    },
  })
};
