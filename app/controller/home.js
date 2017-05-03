'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
    	const { ctx, service } = this;
    	const method = ctx.request.method;
    	if (method === 'GET') {
    		return yield this.ctx.render('home');
    	}
  		const es6Value = ctx.request.body.es6Value;
      ctx.status = 200;
  		if (!es6Value) {
  			return ctx.body = '';
  		}
  		const data = yield service.home.es6ToEs5(es6Value);
      if (data.err) {
        return ctx.body = '语法有错，无法转换！';
      }
  		ctx.body = data.code;
    }
  }
  return HomeController;
};
