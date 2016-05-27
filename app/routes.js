var login = require('./controllers/login.controllers');

module.exports = function (app) {
    // app.get('/', login.helloWorld);
    app.get('/', login.loginRender);
    app.get('/signup', login.signupRender);
}