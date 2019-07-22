const models = require('../models');
const Animal = models.Animal;

module.exports = {
    index: (req,res,next) => {
        Animal.findAll({ include : ['staff']})
        .then((Animals) => {res.json({Animals});})
        .catch((error) => res.status(500).json({ error }));
    },
    show: function(req,res,next){
        Animal.findByPk(req.params.id, { include : ['staff']})
        .then((Animal) => {res.json({Animal});})
        .catch((error) => res.status(404).json({ error }));
    },
    create: (req,res,next) => {
        Animal.create({
            firstname: req.body.firstname,
            age: req.body.age,
            genre: req.body.genre,
            race: req.body.race,
            staffId: req.body.staffId,
            picture: req.body.picture,
        })
        .then((Animal) => {res.json({Animal});})
        .catch((error) => res.status(500).json({ error }));
    },
    update: (req,res,next) => {
        Animal.findByPk(req.params.id)
        .then((Animal) => {
            Animal.update({
                firstname: req.body.firstname,
                age: req.body.age,
                genre: req.body.genre,
                race: req.body.race,
                staffId: req.body.staffId,
                picture: req.body.picture,
            })
        ;})
        .then((Animal) => {res.json({Animal});})
        .catch((error) => res.status(500).json({ error }));
    },
    delete: (req,res,next) => {
        Animal.findByPk(req.params.id)
        .then((Animal) => {
            Animal.destroy()
                .then(() => {res.json({message: 'Animal has been deleted !'});})
                .catch((error) => res.status(500).json({error}));
            ;})
        .catch((error) => res.status(404).json({message: `Category with id ${req.params.id} was not found`}))
    },
    search : (req,res,next) => {
        Animal.findAll({where: {race: req.query.race || ''}})
        .then((response) => {res.json({response});})
        .catch((error) => res.status(500).json({error}));
    }
}