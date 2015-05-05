'use strict';
var config = require('../../config/db-config.json'),
    promise = require('bluebird'),
    db = require('../../libs/db-connector')();

function DBManager() {
  db.configure(config);
}

DBManager.prototype.checkLoginCredential = function (username, password) {
  var query = 'SELECT password FROM personTbl WHERE username = ?';
  return db.query(query,[username]);
}

DBManager.prototype.insertSignupData = function (username,password,fname,lname,email) {
  var query = 'INSERT INTO personTbl (username, password, fname,lname,email) VALUES (?, ?, ?, ?, ?)';
  return db.query(query,[username,password,fname,lname,email]);
}

module.exports = exports = new DBManager();
