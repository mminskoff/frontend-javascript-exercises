module.exports.copy = function(obj) {
	newObj = {};

	for (prop in obj) {
		newObj[prop] = obj[prop];
	}
	return newObj;
};

module.exports.extend = function(dest, src) {
	for (prop in src) {
		dest[prop] = src[prop];
	}
	return dest;
};

module.exports.hasElems = function(obj,arr) {
	for (var  i = 0; i < arr.length; i++) {
		if (obj[arr[i]] == undefined) {
			return false;
		}
	}
	return true;
};