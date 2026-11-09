var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// Import the Travlr MVC routes
var travelerRouter = require('./app_server/routes/index');
var app = express();

// Configure Handlebars view engine
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files without overriding the homepage
app.use(express.static(path.join(__dirname, 'public'), {
  index: false
}));

// Register the Travlr public website routes
app.use('/', travelerRouter);

// Keep existing Express users route
app.use('/users', usersRouter);

module.exports = app;
