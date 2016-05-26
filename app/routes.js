var login = require('./controllers/login.controllers');

module.exports = function (app) {
    app.get('/', login.helloWorld);
}