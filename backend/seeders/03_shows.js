const models = require('../models');
const Show = models.Show;

Show.create({
    staffId: 1,
    date: 2019-07-26,
    picture: "https://nsa40.casimages.com/img/2019/07/22/190722101356320403.jpg"
})
    .then((Show) => {
        console.log('Show created !', Show);
    })
    .catch((err) => console.log(err));


Show.create({
    staffId: 2,
    date: 2019-07-27,
    picture: "https://nsa40.casimages.com/img/2019/07/22/190722100408817106.jpg"
})
    .then((Show) => {
        console.log('Show created !', Show);
    })
    .catch((err) => console.log(err));

Show.create({
    staffId: 3,
    date: 2019-07-28,
    picture: "https://nsa40.casimages.com/img/2019/07/22/190722100644347792.jpg"
})
    .then((Show) => {
        console.log('Show created !', Show);
    })
    .catch((err) => console.log(err));

Show.create({
    staffId: 4,
    date: 2019-07-29,
    picture: "https://nsa40.casimages.com/img/2019/07/22/190722100902866337.jpg"
})
    .then((Show) => {
        console.log('Show created !', Show);
    })
    .catch((err) => console.log(err));

Show.create({
    staffId: 5,
    date: 2019-07-30,
    picture: "https://nsa40.casimages.com/img/2019/07/22/190722101123848723.jpg"
})
    .then((Show) => {
        console.log('Show created !', Show);
    })
    .catch((err) => console.log(err));

