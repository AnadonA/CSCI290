Template.showTrainingCourses.helpers({
	courses: 			function(){
		var keyword		= Session.get("training.courses.keyword");

		if (keyword){
			return courses.find(
			{$or: 
				[
					{Name: 		{$regex: keyword, $options: 'i'}},
					{Section: 	{$regex: keyword, $options: 'i'}},
					{Title: 	{$regex: keyword, $options: 'i'}},
				]
			});
		}

		return courses.find();
	},

	isSelectedCourse: 	function(pCourseID){
		var courseID 	= Session.get("training.courses.selectedCourse");

		if (pCourseID == courseID)
			return "panel-primary";

		return "panel-default";
	},

	courseDetails: 		function(){
		var courseID 	= Session.get("training.courses.selectedCourse");

		if (courseID){
			courseObject 		= new Mongo.ObjectID(courseID);
			return courses.findOne({_id: courseObject});
		}

		return false;
	},

	getPrerequisite: 	function(){
		return courses.findOne({_id: this.toString()}).name;
	}
});