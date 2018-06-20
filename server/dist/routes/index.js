'use strict';

var users = require('./user');

module.exports = function (app) {
  app.use('/api/register', users);
};