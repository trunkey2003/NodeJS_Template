const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

dotenv.config();

const indexRouter = require('./routes/index.routes');
const usersRouter = require('./routes/users.routes');

const app = express();
app.use(cors({ credentials: true, origin: [process.env.CLIENT_HOSTNAME_1]}));
app.use(cookieParser());

const db = require('./configs/db');
db.connect();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.send('404');
});

module.exports = app;
