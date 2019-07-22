const models = require('../models');
const Ticket = models.Ticket;

module.exports = {
    index: (req,res,next) => {
        Ticket.findAll()
        .then((Tickets) => {res.json({Tickets});})
        .catch((error) => res.status(500).json({ error }));
    },
    show: function(req,res,next){
        Ticket.findByPk(req.params.id)
        .then((Ticket) => {res.json({Ticket});})
        .catch((error) => res.status(500).json({ error }));
    },
    create: (req,res,next) => {
        Ticket.create({
            adult: req.body.adult,
            senior: req.body.senior,
            children: req.body.children,
            group: req.body.group,
            school: req.body.school,
            showId: req.body.showId,
        })
        .then((Ticket) => {res.json({Ticket});})
        .catch((error) => res.status(500).json({ error }));
    },
    update: (req,res,next) => {
        Ticket.findByPk(req.params.id)
        .then((Ticket) => {
            Ticket.update({
                adult: req.body.adult,
                senior: req.body.senior,
                children: req.body.children,
                group: req.body.group,
                school: req.body.school, 
                showId: req.body.showId,   
            })
        ;})
        .then((Ticket) => {res.json({Ticket});})
        .catch((error) => res.status(500).json({ error }));
    },
    delete: (req,res,next) => {
        Ticket.findByPk(req.params.id)
        .then((Ticket) => {
            Ticket.destroy()
                .then(() => {res.json({message: 'Ticket has been deleted !'});})
                .catch((error) => res.status(500).json({error}));
            ;})
        .catch((error) => res.status(404).json({message: `Ticket with id ${req.params.id} was not found`}))
    },
}


