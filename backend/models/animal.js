'use strict';
module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', {
    firstname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    race: DataTypes.STRING,
    staffId: DataTypes.INTEGER,
    picture: DataTypes.STRING,
  }, {});
  Animal.associate = function(models) {
    Animal.belongsTo(models.Staff, {as: 'staff'})
  };
  return Animal;
};