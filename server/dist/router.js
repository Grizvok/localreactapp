'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _register = require('./register');

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/api/register', _register2.default);

module.exports = router;