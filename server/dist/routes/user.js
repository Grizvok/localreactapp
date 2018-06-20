'use strict';

var Router = require('express-promise-router');
var db = require('../db');
var router = new Router();

router.post('/', function (req, res) {
  var user = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  };
  console.log(user);
});

// router.get('/', (req, res) => {
//   console.log(req);
// });

module.exports = router;