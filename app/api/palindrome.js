// SETTING API OBJECT
var api = {};

// Validate the palindrome
api.isPalindrome = function(request, response){

  // GET PARAM
  var content = request.params.palindromeParam;

  // Validate palindrome and send response return
  if(_validatePalindrome(content)){
    response.status(200).end();
  }
  // Default return
  response.status(400).end();
};

// Private FUNCTION

// CHECK IF IS PALINDROME
function _validatePalindrome(content){

  // REMOVE SPACES and SPECIAl and others
  var content = content.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  // Reverse content for comparison
  var reverseContent = content.split('').reverse().join('');

  // Content Comparison
  return content == reverseContent;
};

// SETTING MODULE
module.exports = api;
