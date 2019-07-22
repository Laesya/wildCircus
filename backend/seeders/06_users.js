const models = require('../models');
const User = models.User;

User.create({
    name: 'Doe',
    firstname: 'Julie',
    mail: 'Julie.doe@wcs.com',
    password: 'admin',
    adress: '2 Place Francis Chirat',
    city: 'Marseille',
    postalCode: 13001,
    birthday: 25-02-19,
    isAdmin: true,
    isSchool: false,
    point: 0,
    orderId: 1,
})
.then((user) => {
    console.log('User created !', user);
  })
  .catch((err) => console.log(err));

User.create({
    name: 'Doe',
    firstname: 'John',
    mail: 'john.doe@wcs.com',
    password: 'test',
    adress: '2 Place Francis Chirat',
    city: 'Marseille',
    postalCode: 13001,
    birthday: 25-02-19,
    isAdmin: false,
    isSchool: false,
    point: 0,
    orderId: 2,
})
.then((user) => {
    console.log('User created !', user);
  })
  .catch((err) => console.log(err));

  User.create({
    name: 'Wild Code School',
    firstname: '',
    mail: 'wild@wcs.com',
    password: 'school',
    adress: '2 Place Francis Chirat',
    city: 'Marseille',
    postalCode: 13001,
    birthday: 25-02-19,
    isAdmin: false,
    isSchool: true,
    point: 0,
    orderId: 4,
})
.then((user) => {
    console.log('User created !', user);
  })
  .catch((err) => console.log(err));
