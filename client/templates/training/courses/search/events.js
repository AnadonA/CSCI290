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

	"keypress .courseKeyword": 		function(event){
		if (event.charCode	== 13){
			Session.set("training.courses.keyword", event.target.value);
			event.stopPropagation();
		}
	}
});