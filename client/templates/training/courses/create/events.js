Template._createTrainingCourse.events({
	'submit form': 				function(event, template){
		event.preventDefault();
		
		var name 		= event.target.courseName.value;
		var type 		= event.target.courseType.value;
		var title 		= event.target.courseTitle.value;
		var notes 		= event.target.courseNotes.value;
		var units		= event.target.courseUnits.value;
		var section 	= event.target.courseSection.value;

		var goForBroke	= true;

		if (courses.find({section: section}).count() > 0){
			goForBroke	= false;
			toastr.error("A course by the requested section already exists. Perhaps you should consider editing it?", "Error Creating Course")
		}
		
		if (goForBroke){
			courses.insert(
				{
					name: 		name, 
					section: 	section,
					title: 		title,
					notes: 		notes,
					units: 		units,
					type: 		type
				}
			);

			template.find("form").reset();
		}


	}
});