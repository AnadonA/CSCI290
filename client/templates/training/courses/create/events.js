Template._createTrainingCourse.events({
	/*	------------------------------------------------------------------------
		Attempts to insert the user requested course information into the courses
		collection. If the insert command fails for any reason, the user is
		informed of the encountered issue(s).
		------------------------------------------------------------------------	*/
	'submit form': 				function(event, template){
		//	The magic function.
		event.preventDefault();
		
		//	Retrieve the user-input values
		var name 		= event.target.courseName.value;
		var title 		= event.target.courseTitle.value;
		var units		= event.target.courseUnits.value;

		// Apply case correction to the course name.
		name 			= name.trim().toUpperCase();

		//	Attempt to insert the requested information into the courses 
		//	collection.
		courses.insert(
			{
				Name: 		name, 
				Title: 		title,
				Units: 		units
			},
			function(error){
				if (error){
					toastr.error(error.reason, "New Course Addition Failed.")
				}
			}
		);

		//	Clear the form
		template.find("form").reset();

		//	Hide the dialog after processing the request
		$("#_createTrainingCourseDialog").modal("hide");
	}
});