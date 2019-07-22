'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      adress: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      postalCode: {
        type: Sequelize.INTEGER
      },
      birthday: {
        type: Sequelize.DATE
      },
      age: {
        type: Sequelize.INTEGER
      },
      isAdmin: {
        type: Sequelize.BOOLEAN
      },
      isSchool: {
        type: Sequelize.BOOLEAN
      },
      point: {
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model:'Orders',
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
    return queryInterface.dropTable('Users');
  }
};