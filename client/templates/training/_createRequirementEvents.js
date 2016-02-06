Template._createTrainingRequirement.events({
	"submit form": 					function(event, template){
		event.preventDefault();

		var	Name 			= event.target.requirementName.value;
		var Description 	= event.target.requirementDescription.value;
		var RequiredQty 	= parseInt(event.target.requirementQuantity.value);
		var MinimumScore 	= parseFloat(event.target.requirementMinimumScore.value);

		console.log(Name, Description, MinimumScore, RequiredQty);

		trainingRequirementCollection.insert({ 
			name: 			Name, 
			description: 	Description,
			minimumScore: 	MinimumScore,
			requiredQty: 	RequiredQty
		});

		toastr.success("Created " + Name + " training requirement successfully");
	}
});