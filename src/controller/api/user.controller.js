var express = require('express');
var router = express.Router();
var userService = require('src/services/user.service.js');

router.post('/authenticate', authenticateUser);
router.post('/register', registerUser);

module.exports = router;

function authenticateUser(req, res){
    userService.authenticate(req.body.username, req.body.password)
        .then(function (response) {
            if (response) {
                // authentication successful
                res.send({ userId: response.userId, token: response.token });
            } else {
                // authentication failed
                res.status(401).send({status: false, err: 'Usuário e/ou senha inválidos'});
            }
        })
        .catch(function (err) {
            res.status(400).send({status: false, err: err});
        });
}

function registerUser(req, res) {
    userService.create(req.body)
        .then(function (response) {
            
            res.send({ userId: response.userId, token: response.token });
          
           
        })
        .catch(function (err) {
            res.status(400).send({status: false, err: err});
        });
}