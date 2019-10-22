var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
require("dotenv").config();
const passport = require('passport');
require('./passport');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


const connStr = `mongodb+srv://${process.env.DB_USER}:${
  process.env.DB_PASS
  }@${process.env.DB_URL}/${process.env.DB_NAME}`;


mongoose.connect(connStr, err => {
  if (err) console.log(" Connect fail")
  else console.log("Connected database!");

});




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
