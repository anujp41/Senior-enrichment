'use strict';
var Sequelize = require('sequelize');
var db = require('../index');

module.exports = db.define('student', {
  name: {
      type: Sequelize.STRING,
      allowNull: false
  },
  email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
          isEmail: true
      }
  }
});