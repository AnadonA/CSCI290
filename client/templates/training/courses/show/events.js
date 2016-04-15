Template.showTrainingCourses.events({
	"click .selectable": 			function(event, template){
		//	The magic function.
		event.preventDefault();

		var elementID 		= event.target.id;
		var areaText 		= "training.courses";

		selectable.ProcessSelections(areaText, elementID);
	},

	"click .trainingMultiSelect": 	function(event, template){
		var multiMode 	= event.target.checked;

		if (!multiMode)
			selectable.ResetSelections();

		selectable.SetSelectionMode("training.courses", multiMode);
	},

	"click .trainingSelectionReset": 	function(event, template){
		event.preventDefault();

		selectable.ResetSelections("training.courses");
	}
});