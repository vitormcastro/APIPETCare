
require('rootpath')();

var express = require('express');
var bodyParser = require('body-parser');


var api = express();
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

//app.use('/api/login', require('./controller/api/login.controller'));


var apiPort = process.env.PORT || 6000;

var serverAPI = api.listen(apiPort, function() {
  console.log('Server API listening at http://' + serverAPI.address().address + ':' + serverAPI.address().port);
});
