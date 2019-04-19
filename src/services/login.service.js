var config = require('config.json');
var Q = require('q');
var mongo = require('mongoskin');
var connection = process.env.connectionString || config.connectionString;
var db = mongo.db(connection, { native_parser: true });
db.bind('login');

var service = {};
service.create = create;

module.exports = service;

function create(loginParam){
    var deferred = Q.defer();
    db.login.findOne(
        { name: loginParam.name },
        function (err, login) {
            if (err) deferred.reject(err.name + ': '+err.message);

            if(login){
                deferred.reject('Name "'+ loginParam.name + '" is already taken');

            } else{
                createLogin();
            }
    });

    function createLogin(){
        db.login.insert(
            loginParam,
            function (err, login){
                if(err) deferred.reject(err.name+': '+err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;

}