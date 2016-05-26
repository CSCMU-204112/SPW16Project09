const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
var app = express();
var port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views','./app/views');
app.set('view engine', 'pug');

app.use(express.static('./public'));

require('./app/routes')(app);

app.listen(port, function () {
    console.log('Express listening on port ' + port);
});