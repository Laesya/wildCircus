const models = require('../models');
const Order = models.Order;

module.exports = {
    index: (req,res,next) => {
        Order.findAll()
        .then((Orders) => {res.json({Orders});})
        .catch((error) => res.status(500).json({ error }));
    },
    show: function(req,res,next){
        Order.findByPk(req.params.id)
        .then((Order) => {res.json({Order});})
        .catch((error) => res.status(500).json({ error }));
    },
    create: (req,res,next) => {
        Order.create({
            date: req.body.date,
            amount: req.body.amount,
            ticketId: req.body.ticketId,
        })
        .then((Order) => {res.json({Order});})
        .catch((error) => res.status(500).json({ error }));
    },
    update: (req,res,next) => {
        Order.findByPk(req.params.id)
        .then((Order) => {
            Order.update({
                date: req.body.date,
                amount: req.body.amount,
                ticketId: req.body.ticketId,
            })
        ;})
        .then((Order) => {res.json({Order});})
        .catch((error) => res.status(500).json({ error }));
    },
    delete: (req,res,next) => {
        Order.findByPk(req.params.id)
        .then((Order) => {
            Order.destroy()
                .then(() => {res.json({message: 'Order has been deleted !'});})
                .catch((error) => res.status(500).json({error}));
            ;})
        .catch((error) => res.status(404).json({message: `Order with id ${req.params.id} was not found`}))
    },
}

