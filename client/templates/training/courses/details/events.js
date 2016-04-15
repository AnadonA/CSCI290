Template.showCourseDetails.events({
	"keypress #prerequisites": 		function(event){
		var prereq 	 	= event.target.value;

		if (event.charCode == 59 || event.charCode == 44 || event.charCode == 13){
			event.preventDefault();

			var selections 	= selectable.GetSelections("training.courses");
			for (var i = 0; i < selections.length; i++){

				var courseID 	= new Mongo.ObjectID(selections[i]);

				if (courseID && prereq){
					var course 	= courses.findOne({_id: courseID});
					course.registerPrerequisite(prereq);
					event.target.value = "";
				}
			}
		}
		
	},

	"click .removeIcon": 			function(event){
		var prereqID 	= event.target.id;
		var courseID 	= selectable.GetSelections("training.courses")[0];

		if (courseID){
			courseID 	= new Mongo.ObjectID(courseID);

			if (prereqID){
				courses.findOne({_id: courseID}).removePrerequisite(prereqID);	
			}
		}
	},

	"click .saveCourse": 			function(event){
		var courseID 	= new Mongo.ObjectID(Session.get("training.courses.selectedCourse"));

		if (courseID){
			console.log("Working to save the course information");
		}
	},

	"click .deleteCourse": 			function(event){
		var courseID 	= Session.get("training.courses.selectedCourse");

		if (courseID){
			courses.remove({_id: courseID});
			Session.set("training.courses.selectedCourse", undefined);
		}
	}

});