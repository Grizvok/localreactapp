'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

//import morgan from 'morgan';
var path = require('path');
var app = (0, _express2.default)();
var port = 5000;

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_express2.default.static(path.join(__dirname, '../../client/build')));
app.use((0, _cookieParser2.default)());
app.use(require('./router'));

app.use(function (err, req, res, next) {
  logger.error('unhandled application error: ', err);
  res.status(500).send(err);
});

// app.get('/api/users', (req, res) => {
//   console.log(process.env.DB_USER);
//    res.json([
//      {id: 1, username: "somebody"},
//      {id: 2, username: "somebody_else"}
//    ]);
//  });

//  app.post('/api/register', (req, res) => {
//    console.log(req.body);
//  });

//  app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/build/index.html'));
// });

app.listen(port, function () {
  return console.log('Listening on port ' + port);
});

process.on('SIGINT', function () {
  console.log("Bye bye!");process.exit();
});