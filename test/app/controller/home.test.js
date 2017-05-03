'use strict';

describe('test/app/controller/home.test.js', () => {
  it('should app auto init on setup.js', () => {
    // app is auto init at `test/.setup.js`
    assert(app);
    assert(mock);
    // mock alias
    assert(mm);
    assert(request);
  });

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect(200);
  });

  it('should POST /', () => {
    app.mockCsrf();
    return request(app.callback())
     .post('/')
     .expect(200);
  });
});
