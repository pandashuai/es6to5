'use strict';

module.exports = appInfo => {
  const config = {};

    // should change to your own
  config.keys = appInfo.name + '_1491441985314_6991dddp@';

    // View deploy / 视图配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.ddp',
    mapping: {
      '.ddp': 'nunjucks',
    },
  };


  return config;
};
