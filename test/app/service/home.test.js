'use strict';

describe('test/app/service/home.test.js', () => {

		it('should success', function*() {
				const ctx = app.mockContext();
				const topic = yield ctx.service.home.es6ToEs5('let x = n => n + 1');
				assert(topic.err === false);
				assert(topic.code.indexOf('"use strict"') != '-1');
		});

		it('should error', function*() {
				const ctx = app.mockContext();
				const topic = yield ctx.service.home.es6ToEs5('let 1');
				assert(topic.err === true);
				assert(topic.code === '');
		});

});
