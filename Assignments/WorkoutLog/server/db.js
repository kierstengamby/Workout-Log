const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:PgAdmin1150ac@localhost:5432/workout-log");

module.exports = sequelize;