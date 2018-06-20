const Router = require('express-promise-router');
const db = require('../db');
const router = new Router();
const pg = require('pg');
const validator = require('validator');
const session = require('express-session');



router.post('/', async (req, res) => {
  let emailStatus = await checkUserEmail(req.body.email);
  let passwordStatus = await doPasswordsMatch(req.body.password, req.body.confirmPassword);
  let passwordLengthStatus = await checkPasswordLength(req.body.password);
});

function checkUserEmail(email) {
  return new Promise(resolve => {
    resolve(validator.isEmail(email));
  });
}

module.exports = router;