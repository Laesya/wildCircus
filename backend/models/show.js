'use strict';
module.exports = (sequelize, DataTypes) => {
  const Show = sequelize.define('Show', {
    date: DataTypes.DATE,
    staffId: DataTypes.INTEGER,
    picture: DataTypes.STRING
  }, {});
  Show.associate = function(models) {
    Show.belongsTo(models.Staff, {as: 'staff'})
  };
  return Show;
};