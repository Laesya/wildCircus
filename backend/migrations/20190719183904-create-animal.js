'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Animals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      genre: {
        type: Sequelize.STRING
      },
      race: {
        type: Sequelize.STRING
      },
      staffId: {
        type: Sequelize.INTEGER,
        references: {
          model:'Staffs',
          foreignKey:'id'
        }
      },
      picture: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Animals');
  }
};