// import { Sequelize, DataTypes } from 'sequelize';

const { Sequelize, DataTypes } = require('sequelize');
// const { SqliteDialect } = require('@sequelize/sqlite3');

// const sequelize = new Sequelize('sqlite::memory:');

const sequelize = new Sequelize({
  dialect: 'sqlite', // SqliteDialect,
  storage: 'sequelize.sqlite',
});
const User = sequelize.define('User', {
  username: DataTypes.STRING,
  birthday: DataTypes.DATE,
});


// TODO move this to build this should have an await
sequelize.sync({ force: true });

module.exports = {User};
