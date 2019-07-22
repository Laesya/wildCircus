'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    date: DataTypes.DATE,
    amount: DataTypes.INTEGER,
    ticketId: DataTypes.INTEGER,
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.Ticket, {as: 'ticket'})
  };
  return Order;
};