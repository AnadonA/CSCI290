Template.showTrainingRequirements.helpers({
	trainingRequirements: 			function(){
		return trainingRequirements.find();
	},

	selectedRequirementState: 			function(requirementID){
		var selectedRequirement 	= Session.get("selectedTrainingRequirement");
		if (selectedRequirement == requirementID)
			return "primary";

		else return "default";
	},

	selectedRequirement: 		function(){
		return trainingRequirements.findOne({_id: Session.get("selectedTrainingRequirement")});
	}
});