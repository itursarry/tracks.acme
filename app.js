var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const {ObjectId} = require('mongodb');
var index = require('./routes/index');
var track = require('./routes/track');
var TrackAcmeApp = require('./model/TrackAcmeApp');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/tracks', track);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next){
    console.log(res.sta);
    res.render('error', { status: 404, url: req.url });
  });

trackAcmeApp = null;
trackAcmeDB = null;

// DB setup
MongoClient.connect('mongodb+srv://tracks_acme:tracks_acme@itu-qcwri.mongodb.net/test?retryWrites=true', function(err, clientDB) {
  if (err) {
    throw err;
  }
  if(clientDB){
    //clientDB.on('error', console.error.bind(console, 'MongoDB connection error:'));
    trackAcmeDB = clientDB.db('tracks_acme');
    trackAcmeDB.collection('app').find().toArray(function(err, results) {
        
        if(results.length == 0){
            trackAcmeApp = new  TrackAcmeApp();
            trackAcmeDB.insertOne('app').save(trackAcmeApp);
        }else{
            trackAcmeApp = results[0]; 
        }
        app.set('trackAcmeApp', trackAcmeApp);
        app.set('trackAcmeAppDB', trackAcmeDB);
      });
  }
});

app.save = function(){
    
    var aux = trackAcmeDB.collection('app').replaceOne({'_id': ObjectId(trackAcmeApp._id)}, trackAcmeApp);
    console.log("AUXXXXX");
    console.log(aux);
};


/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
