Template.showCourseDetails.helpers({
	/*	------------------------------------------------------------------------
		Retrieves the currently selected course (if one exists) and returns it
		to the user/application for use.
		------------------------------------------------------------------------	*/
	courseDetails: 		function(){
		//	Retrieve the currently selected CourseID
		var courseID 	= Session.get("training.courses.selectedCourse");

		//	If a selected courseID exists, then retrieve it and return it to the
		//	application for use. Otherwise, return false (no object received).
		if (courseID){
			courseObject 		= new Mongo.ObjectID(courseID);
			return courses.findOne({_id: courseObject});
		}

		return false;
	},

	/*	------------------------------------------------------------------------
		Retrieves the requested prerequisites name using the currently iterated
		ID value and returns it for use.
		------------------------------------------------------------------------	*/
	getPrerequisite: 	function(){
		return courses.findOne({_id: this}).Name;
	}
});