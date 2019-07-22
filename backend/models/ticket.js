'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    adult: DataTypes.INTEGER,
    senior: DataTypes.INTEGER,
    children: DataTypes.INTEGER,
    group: DataTypes.INTEGER,
    school: DataTypes.INTEGER,
    showId: DataTypes.INTEGER,

  }, {});
  Ticket.associate = function(models) {
    Ticket.belongsTo(models.Show, {as: 'show'})

  };
  return Ticket;
};