const models = require('../models');
const Staff = models.Staff;


module.exports = {
    index: (req,res,next) => {
        Staff.findAll({ include : ['animal', 'show']})
        .then((Staffs) => {res.json({Staffs});})
        .catch((error) => res.status(500).json({ error }));
    },
    show: (req,res,next) => {
        Staff.findByPk(req.params.id, { include : ['animal', 'show']}) 
        .then((Staff) => {res.json({Staff});})
        .catch((error) => res.status(500).json({ error }));
    },
    create: (req,res,next) => {
        Staff.create({
            name: req.body.name,
            firstname: req.body.firstname,
            pseudonym: req.body.pseudonym,
            work: req.body.work,
            genre: req.body.genre,
            picture: req.body.picture,
            description: req.body.description,
        })
        .then((Staff) => {res.json({Staff});})
        .catch((error) => res.status(500).json({ error }));
    },
    update: (req,res,next) => {
        Staff.findByPk(req.params.id)
        .then((Staff) => {
            Staff.update({
                name: req.body.name,
                firstname: req.body.firstname,
                pseudonym: req.body.pseudonym,
                work: req.body.work,
                genre: req.body.genre,
                picture: req.body.picture,
                description: req.body.description,
            })
        ;})
        .then((Staff) => {res.json({Staff});})
        .catch((error) => res.status(500).json({ error }));
    },
    delete: (req,res,next) => {
        Staff.findByPk(req.params.id)
        .then((Staff) => {
            Staff.destroy()
                .then(() => {res.json({message: 'Staff has been deleted !'});})
                .catch((error) => res.status(500).json({error}));
            ;})
        .catch((error) => res.status(404).json({message: `Staff with id ${req.params.id} was not found`}))
    },
    search : (req,res,next) => {
        Staff.findAll({where: {work: req.query.work || ''}})
        .then((response) => {res.json({response});})
        .catch((error) => res.status(500).json({error}));
    }
};

