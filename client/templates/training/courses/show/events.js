Template.showTrainingCourses.events({
	"click .coursePanel": 			function(event){
		//	The magic function.
		event.preventDefault();

		//	Retrieve the currently selected course ID
		var courseID 	= Session.get("training.courses.selectedCourse");

		//	If there IS a currently selected course ID then test it against the 
		//	currently clicked course. If they are the same, then remove it from
		//	the currently selected course session variable. Othwerise, set it
		//	as the currently selected course session variable.
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
	},

	"keypress #prerequisites": 		function(event){

		var courseID 	= Session.get("training.courses.selectedCourse");
		var prereq 	 	= event.target.value;

		if (courseID && prereq){
			if (event.charCode == 59 || event.charCode == 44 || event.charCode == 13){
				event.preventDefault();
				courses.findOne({_id: courseID}).registerPrerequisite(prereq.toString());
				event.target.value = "";
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