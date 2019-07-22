const models = require('../models');
const Animal = models.Animal;

Animal.create({
    firstname: "Nalo",
    age: 2,
    genre: "male",
    race: "felidae",
    staffId: 1,
    picture: "https://nsa40.casimages.com/img/2019/07/22/190722103538619843.jpg",
})
    .then((animal) => {
        console.log('Staff created !', animal);
    })
    .catch((err) => console.log(err));


Animal.create({
    firstname: "LeeloO",
    age: 6,
    genre: "femelle",
    race: "felidae",
    staffId: 2,
    picture: "https://nsa40.casimages.com/img/2019/07/22/190722103538974172.jpg",
})
    .then((animal) => {
        console.log('Staff created !', animal);
    })
    .catch((err) => console.log(err));

Animal.create({
    firstname: "Idaya",
    age: 6,
    genre: "femelle",
    race: "elephantidae",
    staffId: 1,
    picture: "https://nsa40.casimages.com/img/2019/07/22/190722103538724742.jpg",
})
    .then((animal) => {
        console.log('Staff created !', animal);
    })
    .catch((err) => console.log(err));

Animal.create({
    firstname: "Dumbo",
    age: 4,
    genre: "male",
    race: "elephantidae",
    staffId: 2,    
    picture: "https://nsa40.casimages.com/img/2019/07/22/190722104206469772.jpg",
})
    .then((animal) => {
        console.log('Staff created !', animal);
    })
    .catch((err) => console.log(err));

Animal.create({
    firstname: "Monos",
    age: 4,
    genre: "male",
    race: "ursidae",
    staffId: 3,
    picture: "https://nsa40.casimages.com/img/2019/07/22/190722104205997965.jpg",
})
    .then((animal) => {
        console.log('Staff created !', animal);
    })
    .catch((err) => console.log(err));

Animal.create({
    firstname: "Artus",
    age: 8,
    genre: "male",
    race: "ursidae",
    staffId: 3,
    picture: "https://nsa40.casimages.com/img/2019/07/22/190722104337672728.png",
})
    .then((animal) => {
        console.log('Staff created !', animal);
    })
    .catch((err) => console.log(err));

Animal.create({
    firstname: "Alie",
    age: 8,
    genre: "femelle",
    race: "primate",
    staffId: 4,
    picture: "https://nsa40.casimages.com/img/2019/07/22/190722104205667236.jpg",
})
    .then((animal) => {
        console.log('Staff created !', animal);
    })
    .catch((err) => console.log(err));

Animal.create({
    firstname: "Ruby",
    age: 9,
    genre: "femelle",
    race: "primate",
    staffId: 4,
    picture: "https://nsa40.casimages.com/img/2019/07/22/190722104205745526.jpg",
})
    .then((animal) => {
        console.log('Staff created !', animal);
    })
    .catch((err) => console.log(err));