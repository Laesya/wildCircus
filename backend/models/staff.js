'use strict';
module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define('Staff', {
    name: DataTypes.STRING,
    firstname: DataTypes.STRING,
    pseudonym: DataTypes.STRING,
    work: DataTypes.STRING,
    genre: DataTypes.STRING,
    picture: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  Staff.associate = function(models) {
    Staff.hasMany(models.Animal, {as: 'animal'})
    Staff.hasMany(models.Show, {as: 'show'})
  };
  return Staff;
};