Template.showTrainingRequirements.helpers({
	trainingRequirements: 			function(){
		return trainingRequirementCollection.find();
	},

	selectedRequirementState: 			function(requirementID){
		var selectedRequirement 	= Session.get("selectedTrainingRequirement");
		if (selectedRequirement == requirementID)
			return "primary";

		else return "default";
	},

	selectedRequirement: 		function(){
		return trainingRequirementCollection.findOne({_id: Session.get("selectedTrainingRequirement")});
	}
});