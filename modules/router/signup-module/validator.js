'use strict';
var validator = require("validator");

exports.validateSignUpForm = function(req, res) {
  var firstName = req.body.fname,
      lastName = req.body.lname,
      email = req.body.email,
      userName = req.body.username1,
      password = req.body.password1;

  var isFirstNameNull = validator.isNull(firstName),
      isFirstNameString = validator.isAlpha(firstName),
      isFirstNameValidLength = validator.isLength(firstName,6,25),

      islastNameNull = validator.isNull(lastName),
      islastNameString = validator.isAlpha(lastName),
      islastNameValidLength = validator.isLength(lastName,6,25);

  return (!isFirstNameNull && isFirstNameString && isFirstNameString
          && !islastNameNull && islastNameString && islastNameValidLength);
  };
