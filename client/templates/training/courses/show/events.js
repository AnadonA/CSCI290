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
	}
});