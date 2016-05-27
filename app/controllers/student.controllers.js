var pgp = require('pg-promise')();
const dbconfig = require('../../config/database');
var db = pgp(dbconfig);

 // exports.getAll = function(req, res){

 //     db.any('select * from tablelogin;')
 //     .then(function(data){

 //         // console.log(data);
 //         // res.send('OK');
 //         res.render('student',{
 //              students: data
 //         });

 //     })
 //     .catch(function(error){
 //         console.log(error);
 //     });

 // }

// exports.insert = function(req, res){

//     db.one('insert into student(sid, fname, lname, grade) values($1, $2, $3, $4) returning sid', [req.body.sid, req.body.fname, req.body.lname, req.body.grade])
//     .then(function(data){
//         console.log('Insert student ${data.sid}');
//         res.redirect('/student');
//     })
//     .catch(function(error){
//         console.log(error);
//     });

// }
exports.getForm = function(req, res) {
    res.render('register_form', {
        
    });
}

exports.createUser = function(req, res) {

    db.one('insert into tablelogin(id,password, fname, lname, confirm_pass) values($1, $2, $3, $4, $5) returning username', [req.body.id, req.body.password, req.body.fname, req.body.lname, req.body.confirm_pass])
    .then(function(login){
        // console.log('Insert student ${login.sid}');
        res.redirect('/login');
    })
    .catch(function(error){
        console.log(error);
    });
}
