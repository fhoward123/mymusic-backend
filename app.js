const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

// Define routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const sessionsRouter = require('./routes/sessions');
const collectionRouter = require('./routes/collection');

const app = express();
const db = mongoose.connection;

// Environment Variables
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/collection'
const PORT = process.env.PORT || 3000
const secret = process.env.SECRET

// Express listener
app.listen(PORT, () => {
    console.log(`Express listening on Port ${PORT}...`);
});

//////////////////////////////////
//          Mongoose
/////////////////////////////////
// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
    () => console.log('MongoDB connection established:', mongoURI)
);

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

///////////////////////////////////
//          Middleware
///////////////////////////////////
// Still want this so we can easily parse form info when testing in postman
// (even though we aren't sending directly from forms as we did before)
//app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'));      //make public folder available

//Use express-session to track logins
const session = require('express-session');
app.use(session({
    secret: 'testsecret', //some random string
    resave: false,
    saveUninitialized: false
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Setup routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sessions', sessionsRouter);
// This is prepended to all of the paths defined in the catalog module.
// e.g., to access a list of albums, the URL will be: /collection/albums/.
app.use('/collection', collectionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//404 error
app.get('*', (req, res) => {
    res.status(404).json('DOH!, page not found')
})

module.exports = app;
