module.exports.newArray = function (a, b, c, d) {
	return [a, b, c, d]
};

module.exports.firstAndLast = function(arr) {
	// return [arr[0], arr[arr.length-1]]
	var first = arr.shift();
	var last = arr.pop();

	return [first, last]

};