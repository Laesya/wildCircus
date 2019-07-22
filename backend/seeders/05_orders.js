const models = require('../models');
const Order = models.Order;

Order.create({
    date: 2019-07-26,
    amount: 107,
    ticketId:1
})
    .then((Order) => {
        console.log('Order created !', Order);
    })
    .catch((err) => console.log(err));


Order.create({
    date: 2019-07-27,
    amount: 75,
    ticketId:2,
})
    .then((Order) => {
        console.log('Order created !', Order);
    })
    .catch((err) => console.log(err));

Order.create({
    date: 2019-07-28,
    amount: 100,
    ticketId:3,
})
    .then((Order) => {
        console.log('Order created !', Order);
    })
    .catch((err) => console.log(err));

Order.create({
    date: 2019-07-28,
    amount: 100,
    ticketId:4,
})
    .then((Order) => {
        console.log('Order created !', Order);
    })
    .catch((err) => console.log(err));