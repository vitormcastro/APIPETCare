var express = require('express');
var router = express.Router();
var loginService = require('src/services/login.service.js');

router.post('/create', createLogin);

module.exports = router;

function createLogin(req, res){
    loginService.create(req.body)
        .then(function() {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.sendStatus(400).send(err);
        });
}