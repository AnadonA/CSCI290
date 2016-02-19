Template.showTrainingCourses.events({
	"click .coursePanel": 			function(event){
		event.preventDefault();

		var courseID 	= Session.get("training.courses.selectedCourse");

		if (courseID){
			if (courseID == event.target.id)
				Session.set("training.courses.selectedCourse", undefined);
			else
				Session.set("training.courses.selectedCourse", event.target.id);
		}
		else{
			Session.set("training.courses.selectedCourse", event.target.id);
		}
	},

	"click .removeIcon": 			function(event){
		var courseID 	= Session.get("training.courses.selectedCourse");
		var prereqID 	= event.target.id;

		if (courseID){
			if (prereqID){
				courses.findOne({_id: courseID}).removePrerequisite(prereqID);	
			}
		}
	}
});