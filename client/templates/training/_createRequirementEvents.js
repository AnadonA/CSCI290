Template._createTrainingRequirement.events({
	"submit form": 					function(event, template){
		event.preventDefault();

		var	Name = 			event.target.requirementName.value;
		var Description =	event.target.requirementDescription.value;

		trainingRequirementCollection.insert({ name: Name, description: Description });

		toastr.success("Created " + Name + " training requirement successfully");
	}
});