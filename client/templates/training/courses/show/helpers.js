Template.showTrainingCourses.helpers({
	courses: 			function(){
		var keyword		= searchable.GetKeywords();

		if (keyword){
			return courses.find(
			{$or: 
				[
					{Name: 		{$regex: keyword, $options: 'i'}},
					{Section: 	{$regex: keyword, $options: 'i'}},
					{Title: 	{$regex: keyword, $options: 'i'}},
				]
			},
			{sort: 	{Name: 		1}});
		}

		return courses.find();
	},

	shortTitle: 		function(){
		var length 	= 0;
		var title 	= "";
		var input 	= this.Title;

		if (input.length > 8){
			for (var i = 0; i < 8; i ++)
				title += input[i];
			title 	+= "...";
		}
		else
			title 	= input;

		return title;
	},

	isSelectedCourse: 	function(pCourseID){
		return selectable.CheckSelections("training.courses", pCourseID);
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
	},

	getMultiMode: 		function(){
		var multiMode 	= selectable.GetSelectionMode("training.courses");

		return multiMode ? "checked" : "";
	},

	isSelected: 		function(){
		var count 	= selectable.GetSelections("training.courses").length;
		return (count >= 1) ? true : false;
	}
});