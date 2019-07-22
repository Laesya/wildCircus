const models = require('../models');
const Staff = models.Staff;

Staff.create({
    name: "Aurousseau",
    firstname: "Emeline",
    pseudonym: "Eradna",
    work: "Dresseur",
    genre: "féminin",
    picture: "https://nsa40.casimages.com/img/2019/07/21/190721012758608349.jpg",
    description: "Forte de son expérience, Eradna est la tête pensante du cirque pour tout ce qui concerne l'éducation de nos animaux."
})
    .then((staff) => {
        console.log('Staff created !', staff);
    })
    .catch((err) => console.log(err));

Staff.create({
    name: "Labed",
    firstname: "Jean",
    pseudonym: "Maza",
    work: "Dresseur",
    genre: "masculin",
    picture: "https://nsa40.casimages.com/img/2019/07/21/mini_190721012759132259.jpg",
    description: "Jean, surnommé Maza, s'occupe d'un lion et d'un éléphant, une double casquette fort utile, d'autant que les deux animaux ont grandit ensemble."


})
    .then((staff) => {
        console.log('Staff created !', staff);
    })
    .catch((err) => console.log(err));

Staff.create({
    name: "Hamici",
    firstname: "Wald",
    pseudonym: "Wawa",
    work: "Dresseur",
    genre: "masculin",
    picture: "https://nsa40.casimages.com/img/2019/07/21/190721012759390948.jpg",
    description: "Walid, surnommé Wawa, s'occupe de nos deux ours, prêtant une grande attention à leur bien-être, il est en recherche d'une femme pour équilibrer le duo."

})
    .then((staff) => {
        console.log('Staff created !', staff);
    })
    .catch((err) => console.log(err));

Staff.create({
    name: "Carbone",
    firstname: "Dan",
    pseudonym: "The Dan",
    work: "Dresseur",
    genre: "masculin",
    picture: "https://nsa40.casimages.com/img/2019/07/21/190721012800152926.jpg",
    description: "Dan, surnommé The Dan, est toujours accompagné de ses deux chimpanzées, Ruby et Alie, il partage même ses repas avec elles."

})
    .then((staff) => {
        console.log('Staff created !', staff);
    })
    .catch((err) => console.log(err));

Staff.create({
    name: "Morcillo",
    firstname: "Muriel",
    pseudonym: "El mamie",
    work: "Funambule",
    genre: "féminin",
    picture: "https://nsa40.casimages.com/img/2019/07/21/190721013227480901.jpg",
    description: "Plus ancienne membre de la troupe, Muriel, surnommée El Mamie, se joue de l'équilibre et des lois de la physique en se promenant sur ses fils."
})
    .then((staff) => {
        console.log('Staff created !', staff);
    })
    .catch((err) => console.log(err));

Staff.create({
    name: "Provost",
    firstname: "Alexandre",
    pseudonym: "El décoif",
    work: "Cracheur",
    genre: "masculin",
    picture: "https://nsa40.casimages.com/img/2019/07/21/19072101340498192.jpg",
    description: "Alexandre, surnommé El décoif, montre l'étendue de sa puissance en tant que cracheur de feu, et ses flammes illuminent régulièrement la nuit."

})
    .then((staff) => {
        console.log('Staff created !', staff);
    })
    .catch((err) => console.log(err));

Staff.create({
    name: "Boukerche",
    firstname: "Radouane",
    pseudonym: "Radoudou The Kid",
    work: "Clown",
    genre: "masculin",
    picture: "https://nsa40.casimages.com/img/2019/07/21/190721013635361317.jpg",
    description: "Radouane, surnommé Radoudou The Kid, surprend tout le monde par ses facéties, et même si cela lui est parfois retombé dessus, notre cowboy clownesque fait toujours rire."

})
    .then((staff) => {
        console.log('Staff created !', staff);
    })
    .catch((err) => console.log(err));

Staff.create({
    name: "Mouledous",
    firstname: "Sébastien",
    pseudonym: "El (de)codeur",
    work: "Fakir",
    genre: "masculin",
    picture: "https://nsa40.casimages.com/img/2019/07/21/190721013816483283.jpg",
    description: "Sébastien, surnommé El (dé)codeur, n'hésite jamais à aller jusqu'au bout des choses, mêmes lorsque ses pieds sont sur des piques!"

})
    .then((staff) => {
        console.log('Staff created !', staff);
    })
    .catch((err) => console.log(err));
    
