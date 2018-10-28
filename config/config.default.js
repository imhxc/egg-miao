'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.sequelize = {
    dialect: 'mysql',
    database: 'miao',
    username: 'root',
    password: '',
    host: 'localhost',
    port: '3306',
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540655293528_1455';

  // add your config here
  config.middleware = [];

  config.flash = {
    key: Symbol.for('flash'),
  };

  config.validator = {
    open: 'zh-CN',
    languages: {
      'zh-CN': {
        required: '必须填 %s 字段',
      },
    },
    async formatter(ctx, error) {
      appInfo('[egg-y-validator] -> %s', JSON.stringify(error, ' '));
      throw new Error(error[0].message);
    },
  };

  return config;
};
