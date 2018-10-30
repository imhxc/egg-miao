'use strict';

// had enabled by egg
// exports.static = true;

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.falsh = {
  enable: true,
  package: 'egg-msg-flash-panda',
};

exports.validator = {
  enable: true,
  package: 'egg-y-validator',
};
