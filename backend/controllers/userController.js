const models = require('../models');
const User = models.User;

module.exports = {
    index: (req,res,next) => {
        User.findAll()
        .then((Users) => {res.json({Users});})
        .catch((error) => res.status(500).json({ error }));
    },
    show: function(req,res,next){
        User.findByPk(req.params.id)
        .then((User) => {res.json({User});})
        .catch((error) => res.status(500).json({ error }));
    },
    create: (req,res,next) => {
        User.create({
            name: req.body.name,
            firstname: req.body.firstname,
            mail: req.body.mail,
            password: req.body.password,
            adress: req.body.adress,
            city: req.body.city,
            postalCode: req.body.postalCode,
            birthday: req.body.birthday,
            isAdmin: req.body.isAdmin,
            isSchool: req.body.isSchool,
            point: req.body.point,
            orderId: req.body.orderId,
        })
        .then((User) => {res.json({User});})
        .catch((error) => res.status(500).json({ error }));
    },
    update: (req,res,next) => {
        User.findByPk(req.params.id)
        .then((User) => {
            User.update({
                name: req.body.name,
                firstname: req.body.firstname,
                mail: req.body.mail,
                password: req.body.password,
                adress: req.body.adress,
                city: req.body.city,
                postalCode: req.body.postalCode,
                birthday: req.body.birthday,
                isAdmin: req.body.isAdmin,
                isSchool: req.body.isSchool,
                point: req.body.point,
                orderId: req.body.orderId,  
            })
        ;})
        .then((User) => {res.json({User});})
        .catch((error) => res.status(500).json({ error }));
    },
    delete: (req,res,next) => {
        User.findByPk(req.params.id)
        .then((User) => {
            User.destroy()
                .then(() => {res.json({message: 'User has been deleted !'});})
                .catch((error) => res.status(500).json({error}));
            ;})
        .catch((error) => res.status(404).json({message: `User with id ${req.params.id} was not found`}))
    },
    searchAdmin : (req,res,next) => {
        User.findAll({where: {isAdmin: req.query.isAdmin = true || ''}})
        .then((response) => {res.json({response});})
        .catch((error) => res.status(500).json({error}));
    },
    searchSchool : (req,res,next) => {
        User.findAll({where: {isSchool: req.query.isSchool = true || ''}})
        .then((response) => {res.json({response});})
        .catch((error) => res.status(500).json({error}));
    }
}


