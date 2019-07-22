var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var staffRouter = require('./routes/staff');
 var animalRouter = require('./routes/animal');
 var showRouter = require('./routes/show');
 var ticketRouter = require('./routes/ticket');
 var orderRouter = require('./routes/order');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
 app.use('/animals', animalRouter);
app.use('/staffs', staffRouter);
 app.use('/shows', showRouter);
 app.use('/tickets', ticketRouter);
app.use('/orders', orderRouter);




module.exports = app;
