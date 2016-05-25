// REQUERIDS
var express           = require('express');
var app               = express();
var load              = require('express-load');
var bodyParser        = require('body-parser');
var routes            = require('../app/routes/palindromeRoute');

console.log(990990);

// SETTING EXPRESS
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

module.exports = app;
