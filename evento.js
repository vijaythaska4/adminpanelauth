// Import required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
// var flash = require("connect-flash");
const flash = require("express-flash");
var logger = require('morgan');
var dbConnection = require('./.config/dbConnection');
var dotenv = require("dotenv");
const basemiddleware = require("./middleware/basemiddleware")
var bodyParser = require('body-parser');
const fileupload = require("express-fileupload");
var expressLayouts = require('express-ejs-layouts');
var indexRouter = require('./routes/dashBoardRoutes');
var usersRouter = require('./routes/users');
const cmsRoutes = require('./routes/cmsRoutes ');

// Create an instance of the Express application
var app = express();

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configure middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Set extended to false
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser for url-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies
app.use((req, res, next) => {
  if (req.url == "/") {
    res.redirect("/login");
    return;
  }
  next();
});
//This is socket.io
const http=require("http").createServer(app)
const io = require('socket.io')(http);
require("./socket/groupSocket")(io)

// Configure session
app.set("trust proxy", 1);

app.use(session({
  secret: "secret",                                                             
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 365 * 1000,
  },
}));
app.use(flash());
app.use(basemiddleware);
app.use(fileupload());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressLayouts);
app.set("layout", "./layout/admin_layout");
// app.set("layout","./views/layout/admin_layout")

// Set up routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', cmsRoutes);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Connect to the database
dbConnection();

// Start the server
var port = process.env.PORT || 8747;
// var port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Export the app module
module.exports = app;

//Path where event image and videos store
//http://65.2.68.95:8747/images/videos/