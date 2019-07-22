'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    firstname: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    adress: DataTypes.STRING,
    city: DataTypes.STRING,
    postalCode: DataTypes.INTEGER,
    birthday: DataTypes.DATE,
    isAdmin: DataTypes.BOOLEAN,
    isSchool: DataTypes.BOOLEAN,
    point: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.Order, {as: 'order'})
  };
  return User;
};