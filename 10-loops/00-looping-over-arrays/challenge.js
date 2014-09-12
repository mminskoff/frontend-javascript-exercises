module.exports.sumNumbers = function(arr){
	for (var i= 0, sum = 0; i < arr.length; sum += arr[i++]);
		return sum;
};

// var sumArray = function (array) {
//   for (
//     var i = 0,             // the iterator
//       sum = 0;             // the total amount
//       i < arr.length;    // if statement
//       sum += arr[i++]    // add each value
//   );
//   return sum;
// };

module.exports.splitAndLowerCaseString = function(inputString) {
  return inputString.toLowerCase().split(",");
};

module.exports.addIndex = function(arr){
	var output = [];

	for (var i = 0; i < arr.length; i++) {
		output.push(i + " is " + arr[i]);
	}
 
 	return output;
};
