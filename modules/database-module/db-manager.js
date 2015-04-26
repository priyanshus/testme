'use strict';
var config = require('../../config/db-config.json'),
    promise = require('bluebird'),
    db = require('../../libs/db-connector')();

function DBManager() {
  db.configure(config);
}

DBManager.prototype.checkLoginCredential = function (username, password) {
  var query = 'SELECT password FROM users WHERE username = ?';
  return db.query(query,[username]);
}

DBManager.prototype.insertSignupData = function (username,password) {
  var query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  return db.query(query,[username,password]);
}

module.exports = exports = new DBManager();
