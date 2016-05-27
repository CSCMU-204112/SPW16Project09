
// var index = require('./controllers/index.controllers');
var register = require('./controllers/register.controllers');

module.exports = function(app) {
	
	app.route('/login')
	.get(register.login)
	.post(register.checklogin);


	// app.get('/signup',register.signup);

	app.route('/signup')
	.get(register.signup)
	.post(register.createUser);
	
	app.route('/home')
	.get(register.home);
	 	// */.get(index.infoRender);

	// app.route('/register')
	// 	.get(register.getForm)
	// 	.post(register.createUser)
}