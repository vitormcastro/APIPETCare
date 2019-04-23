
require('rootpath')();

var express = require('express');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require("config.json");

var api = express();
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
api.use('/api', expressJwt({ secret: process.env.secret || config.secret }).unless({ path: ['/api/about','/api/users/authenticate', '/api/users/register'] }));


//app.use('/api/login', require('./controller/api/login.controller'));


var apiPort = process.env.PORT || config.port;

var serverAPI = api.listen(apiPort, function() {
  console.log('Server API listening at http://' + serverAPI.address().address + ':' + serverAPI.address().port);
});
