const Router = require('express-promise-router');
const db = require('../db');
const router = new Router();

router.post('/', (req, res) => {
  const user = { 
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