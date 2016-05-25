var app   = require('./config/express');
var http  = require('http');

// Create and Listen SERVICE
http.createServer(app).listen(3000);
