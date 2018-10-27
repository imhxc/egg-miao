'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   const {
    INTEGER,
    STRING,
    DATE,
    TINYINT
   } = Sequelize;
   return queryInterface.createTable('Users', {
     id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER
     },
     email: STRING(40),
     password: STRING,
     username: STRING(40),
     weibo: STRING(40),
     weixin: STRING(40),
     team_id: INTEGER,
     receive_remote: TINYINT(1),
     email_verifyed: TINYINT(1),
     inviter_id: INTEGER,
     avatar: STRING(40),
     created_at: {
       allowNull: false,
       type: DATE,
     },
     updated_at: {
       allowNull: false,
       type: DATE
     }
   });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return (queryInterface, Sequelize) => {
     return queryInterface.dropTable('Users');
   }
  }
};
