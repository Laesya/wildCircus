'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      adult: {
        type: Sequelize.INTEGER
      },
      senior: {
        type: Sequelize.INTEGER
      },
      children: {
        type: Sequelize.INTEGER
      },
      group: {
        type: Sequelize.INTEGER
      },
      school: {
        type: Sequelize.INTEGER
      },
      showId: {
        type: Sequelize.INTEGER,
        references: {
          model:'Shows',
          foreignKey:'id'
        }
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
    return queryInterface.dropTable('Tickets');
  }
};