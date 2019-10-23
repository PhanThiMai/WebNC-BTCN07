
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');
const express = require("express");
const path = require("path");
var mongoose = require("mongoose");
require("dotenv").config();
const passport = require('passport');
require('./passport');


var app = express();
mongoose.Promise = global.Promise;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const isProduction = process.env.NODE_ENV === 'production';

app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if (!isProduction) {
  app.use(errorHandler());
}


const connStr = `mongodb+srv://${process.env.DB_USER}:${
  process.env.DB_PASS
  }@${process.env.DB_URL}/${process.env.DB_NAME}`;


mongoose.connect(connStr, err => {
  if (err) console.log(" Connect fail")
  else console.log("Connected database!");

});


app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

const server = app.listen(4000, () => console.log('Server started on http://localhost:4000'));
