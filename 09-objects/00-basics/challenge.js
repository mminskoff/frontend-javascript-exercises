module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
	var course ={
		title: courseTitle,
		duration: courseDuration,
		students: courseStudents
	}
	return course;

};

module.exports.addProperty = function (object, newProp, newValue) {
	object[newProp] = newValue;
	return object;
};

module.exports.formLetter = function () {
};

module.exports.canIGet = function () {
};