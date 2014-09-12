module.exports.getKeys = function(obj) {
	var arr =[];
	for (var prop in obj) {
		arr.push(prop);
	}
	return arr;
};

module.exports.getValues = function(obj) {
	var arr = [];

	for (var prop in obj) {
		arr.push(obj[prop]);
	}

	return arr;
};

module.exports.objectToArray = function(obj) {
	var arr = [];

	for (var prop in obj) {
		arr.push(prop + " is " + obj[prop]);
	}

	return arr;
};