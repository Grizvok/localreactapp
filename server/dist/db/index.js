'use strict';

var _require = require('pg'),
    Pool = _require.Pool;

module.exports = {
  query: function query(text, params) {
    return pool.query(text, params);
  }
};