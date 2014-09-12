module.exports.addItem = function(item, arr) {
	if (arr.indexOf(item)  == - 1) {
		arr.push(item)
	}
	return arr;

	//GO OVER THIS AGAIN
};

module.exports.reverseSortedList = function(arr) {
	// var sort = arr.sort();
	// var reverse = sort.reverse();

	// return reverse
	return arr.sort().reverse();
};

//GO OVER AGAIN