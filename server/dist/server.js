'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var path = require('path');
var app = (0, _express2.default)();
var port = 5000;

app.use(_express2.default.static(path.join(__dirname, '../../client/build')));

app.get('/api/users', function (req, res) {
  console.log(process.env.DB_USER);
  res.json([{ id: 1, username: "somebody" }, { id: 2, username: "somebody_else" }]);
});

app.post('/api/register', function (req, res) {
  console.log(req.body);
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.listen(port, function () {
  return console.log('Listening on port ' + port);
});