var api   = require('../api/palindrome');
var path  = require('path');
module.exports = function(app){

  // Creating route
app.get('/v1/isPalindrome/:palindromeParam', api.isPalindrome);

// ENABLE HTML5MODE
app.all('/*', function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
  });
};
