
require('rootpath')();

var express = require('express');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use('/api/login', require('./controller/api/login.controller'));


var apiPort = process.env.PORT || 6000;

var serverAPI = app.listen(apiPort, function() {
  console.log('Server API listening at http://' + serverAPI.address().address + ':' + serverAPI.address().port);
});

app.get('/maps', function(req, res) {
    var dados = [
      {
        lat: -25.470991, 
        lon: -49.271036
      },
      {
        lat: -0.935586,
        lon: -49.635540
      },
      {
        lat: -2.485874, 
        lon: -43.128493
      }
    ];
  
    res.send(JSON.stringify(dados));
  });

  app.listen(8000, function() {
    console.log('Servidor rodando na porta 8000.');
  });