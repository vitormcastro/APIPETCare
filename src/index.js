
require('rootpath')();

var express = require('express');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require("config.json");

var api = express();
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
api.use('/app', expressJwt({ secret: process.env.secret || config.secret }).unless({ path: ['/app/about','/app/users/authenticate', '/app/users/register','/app'] }));


api.use('/app/users', require('./controller/api/user.controller'));
api.get('/app', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully'
  })
});

var apiPort = process.env.PORT || config.port;

var serverAPI = api.listen(apiPort, function() {
  console.log('Server API listening at http://' + serverAPI.address().address + ':' + serverAPI.address().port);
});
