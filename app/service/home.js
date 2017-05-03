'use strict';
const babel = require('babel-core');
module.exports = app => {
  class Home extends app.Service {
    * es6ToEs5(data) {
      const msg = { err: false, code: '' };
      try {
        msg.code = babel.transform(data, { presets: [ 'es2015' ] });
        msg.code = msg.code.code;
      } catch (e) {
        msg.err = true;
        msg.code = '';
      }
    	return msg;
    }
  }
  return Home;
};

