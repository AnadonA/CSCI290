Template.trainingCoursesSearchBar.events({
	/*	------------------------------------------------------------------------
		Retrieves and stores the provided CourseKeyword in its session 
		variable. Because the session is used to store the value, it will be 
		naturally responsive.
		------------------------------------------------------------------------	*/
	"click .courseSearch": 			function(event){
		event.preventDefault();

		var keyword 	= $(".courseKeyword").val();

		if (keyword){
			Session.set("training.courses.keyword", keyword);
		}
		else{
			Session.set("training.courses.keyword", undefined);
		}

		Session.set("training.courses.selectedCourse", undefined);
	},

	"keyup .courseKeyword": 		function(event){
		var keyword 	= event.target.value;

		if (keyword.length > 0)
			Session.set("training.courses.keyword", event.target.value);
		else
			Session.set("training.courses.keyword", undefined);
	}
});