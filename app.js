'use strict'
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var mongodb = require('mongodb');
var mongoose = require('mongoose')
, Schema = mongoose.Schema;
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var track = require('./routes/track');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/tracks', track);

/// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
    console.log(res.sta);
    res.render('error', { status: 404, url: req.url });
});

// DB setup
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB: error:'));
mongoose
    .connect('mongodb+srv://tracks_acme:tracks_acme@itu-qcwri.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB: La conexión a la base de datos se ha realizado correctamente");
    })
    .catch(err => console.log(err));


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
