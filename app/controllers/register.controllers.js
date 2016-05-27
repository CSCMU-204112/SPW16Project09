var pgp = require('pg-promise')();
const dbconfig = require('../../config/database');
var db = pgp(dbconfig);

exports.createUser = function(req, res) {

    var id = req.body.username;
    var password = req.body.password;
    var email  =req.body.email;
    var confirm_pass = req.body.confirm_pass;
    var command = 'insert into tablelogin(id,password, email) values($1, $2, $3) returning id';

    // if (password = confirm_pass){
    db.one(command,[id,password,email])
        .then(function(data){
            console.log('Insert student ${login.sid}');
            res.render('login');
        })

        .catch(function(error){
            console.log(error);
        });

    // }else{
    //     res.render('signup');
    // }

    
}

exports.checklogin = function(req, res) {


    var username = req.body.username;
    var pass = req.body.password;

    db.any("select * from tablelogin where id = $1 and password = $2",[username,pass])
        .then(function(data){
        	 console.log(data[0].id);
        	//res.render('signup');
        		
        }) 
        .catch(function(error){
        	// console.log('error');
        	res.redirect('login');
        });



}

exports.login = function(req, res) {
    res.render('login');
}

exports.signup = function(req, res) {
    res.render('signup', {

    });
}

exports.home = function(req, res) {
	res.render('album',{

	});
}

