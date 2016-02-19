Template.showTrainingCourses.helpers({
	courses: 			function(){
		var keyword		= Session.get("training.courses.keyword");

		if (keyword){
			return courses.find(
			{$or: 
				[
					{name: 		{$regex: keyword, $options: 'i'}},
					{section: 	{$regex: keyword, $options: 'i'}},
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

		if (courseID)
			return courses.findOne({_id: courseID});

		return false;
	},

	getPrerequisite: 	function(){
		return courses.findOne({_id: this.toString()}).name;
	}
});