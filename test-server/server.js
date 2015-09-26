'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');

var port = process.env.PORT || 3000;

var environment = process.env.NODE_ENV;

app.use(bodyParser.json());
app.use(logger('dev'));

app.use(express.static('build'));

//Bootstrap routes
require('./routes/index')(app);

var server = app.listen(port, function(){
    var port = server.address().port;
    console.log('Server listening at http://localhost:%s', port);
});