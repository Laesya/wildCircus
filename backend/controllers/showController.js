const models = require('../models');
const Show = models.Show;

module.exports = {
    index: (req,res,next) => {
        Show.findAll({ include : ['staff']})
        .then((Shows) => {res.json({Shows});})
        .catch((error) => res.status(500).json({ error }));
    },
    show: (req,res,next) => {
        Show.findByPk(req.params.id, { include : ['staff']})
        .then((Show) => {res.json({Show});})
        .catch((error) => res.status(500).json({ error }));
    },
    create: (req,res,next) => {
        Show.create({
            staffId: req.body.staffId,
            date: req.body.date,
            picture: req.body.date,
        })
        .then((Show) => {res.json({Show});})
        .catch((error) => res.status(500).json({ error }));
    },
    update: (req,res,next) => {
        Show.findByPk(req.params.id)
        .then((Show) => {
            Show.update({
                staffId: req.body.staffId,
                date: req.body.date, 
                picture: req.body.date   
            })
        ;})
        .then((Show) => {res.json({Show});})
        .catch((error) => res.status(500).json({ error }));
    },
    delete: (req,res,next) => {
        Show.findByPk(req.params.id)
        .then((Show) => {
            Show.destroy()
                .then(() => {res.json({message: 'Show has been deleted !'});})
                .catch((error) => res.status(500).json({error}));
            ;})
        .catch((error) => res.status(404).json({message: `Show with id ${req.params.id} was not found`}))
    },
    search : (req,res,next) => {
        Show.findAll({where: {staffId: req.query.staffId || ''}})
        .then((response) => {res.json({response});})
        .catch((error) => res.status(500).json({error}));
    }
}

