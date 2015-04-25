'use strict';
var config = require('../../config/db-config.json'),
    promise = require('bluebird'),
    db = require('../../libs/db-connector')();

function DBReader() {
  db.configure(config);
}

DBReader.prototype.checkLoginCredential = function (username, password) {
  var query = 'SELECT password FROM users WHERE username = ?';
  return db.query(query,[username]);
}

module.exports = exports = new DBReader();
