'use strict';

var Router = require('express-promise-router');
var db = require('../db');
var router = new Router();
var pg = require('pg');
var validator = require('validator');
var session = require('express-session');

router.post('/', async function (req, res) {
  var emailStatus = await checkUserEmail(req.body.email);
  var passwordStatus = await doPasswordsMatch(req.body.password, req.body.confirmPassword);
  var passwordLengthStatus = await checkPasswordLength(req.body.password);
});

function checkUserEmail(email) {
  return new Promise(function (resolve) {
    resolve(validator.isEmail(email));
  });
}

module.exports = router;