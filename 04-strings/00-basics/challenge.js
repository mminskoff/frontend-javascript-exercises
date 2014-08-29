module.exports.formLetter = function(firstName, senderName, msg) {
	return "Hello " + firstName + "," + "\n\n" + msg + "\n\n" + "Sincerely," + "\n" + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
	// console.log(bigString.length);
	var str = bigString.substring(startA, endA);
	var str2 = bigString.substring(startB, endB);
	return str + str2; 

};

module.exports.findFirstMatch = function(text, searchString) {
	return text.indexOf(searchString);

};

module.exports.findLastMatch = function(text, searchString) {
	return text.lastIndexOf(searchString);

};

// module.exports.substringBetweenMatches = function(text, searchString) {
// 	var searchLength = searchString.lenghth;
// 	var firstMatch = text.indexOf(searchString) + searchLength;
// 	var lastMatch = text.lastIndexOf(searchString);

// 	return text.substring(firstMatch,lastMatch);

// };
module.exports.substringBetweenMatches = function(text, searchString) {
  var searchLength = searchString.length;
  var firstMatch = text.indexOf(searchString) + searchLength;
  var lastMatch = text.lastIndexOf(searchString);
  return text.substring(firstMatch, lastMatch);
};