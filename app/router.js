'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.post('/', 'home.index');
};
