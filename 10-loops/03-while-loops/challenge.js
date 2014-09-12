module.exports.stream = function (conditionalFn, actionFn) {
	while (conditionalFn()) {
		actionFn();
	}
};

// module.exports.sumNumbers = function (num) {
// 	var sum = 0;
// 	var count = 0;
// 	while (count < num.length) {
// 		sum += num[count];
// 		count++;
// 	}
// 	return sum;
// };

module.exports.sumNumbers = function (num) {
	var sum = 0;
	
	for (var i =0; i < num.length; i++) {
		sum += num[i];
	}
	return sum;
};

var arr = [1,2,3,4, 5, 6]

var test = function (arr) {
	var sum = 0;

	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
}
arr[0] = 1; // sum 1
arr[1] = 2; // sum 3
arr[2] = 3; // sum 6
arr[3] = 4; // sum 10


