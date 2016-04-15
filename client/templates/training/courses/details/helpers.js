Template.showCourseDetails.helpers({
	/*	------------------------------------------------------------------------
		Retrieves the currently selected course (if one exists) and returns it
		to the user/application for use.
		------------------------------------------------------------------------	*/
	courseDetails: 		function(){
		//	Retrieve the currently selected CourseID
		var courseList 	= selectable.GetSelections("training.courses");
		var multiSelect	= selectable.GetSelectionMode("training.courses");

		//	If a selected courseID exists, then retrieve it and return it to the
		//	application for use. Otherwise, return false (no object received).
		if (courseList.length > 0){
			if (courseList.length == 1){
				var courseID 		= courseList[0];
				courseObject 		= new Mongo.ObjectID(courseID);
				return courses.findOne({_id: courseObject});
			}
			else {
				//	Compile the details of the selected courses.
				var courseArray 	= [];
				for (var i = 0; i < courseList.length; i++)
					courseArray.push(courses.findOne({_id: new Mongo.ObjectID(courseList[i])}));

				var courseTitle		= "";
				var courseUnits 	= 0;
				var prerequisites 	= courseArray[0].prerequisites;

				for (var i = 0; i < courseArray.length; i++){
					courseTitle		+= courseArray[i].Name;

					if (i > 0){

						if (courseUnits != courseArray[i].Units)
							courseUnits 	= "Multiple";
						else
							courseUnits 	= courseArray[i].Units;
					}
					else
						courseUnits 	= courseArray[i].Units;

					if (i < courseArray.length - 1)
						courseTitle += ", ";
				}

				return {
					Name: 	courseTitle,
					prerequisites: prerequisites,
					Title: 	"Multiple (" + courseArray.length + ") Courses Selected",
					Units:  courseUnits
				};
			}
		}

		return false;
	},

	readMode: 	function(){
		var selections 	= selectable.GetSelections("training.courses");

		return (selections.length > 1) ? "disabled" : "";
	},

	/*	------------------------------------------------------------------------
		Retrieves the requested prerequisites name using the currently iterated
		ID value and returns it for use.
		------------------------------------------------------------------------	*/
	getPrerequisite: 	function(){
		var course 		= courses.findOne({_id: this});

		if (!course)
			return false;

		return course.Name;
	}
});