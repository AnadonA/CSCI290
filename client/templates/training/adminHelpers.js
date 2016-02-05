Template.trainingAdmin.helpers({
	requirements: 			function(){
		return trainingRequirementCollection.find();
	},

	buttonState: 			function(buttonName){
		var selection = Session.get("taSelection");

		if (selection.indexOf(buttonName) >= 0)
			return "btn-primary";

		return "btn-default";
	},

	showPackages: 			function(){
		return (Session.get("taSelection").indexOf("Packages") >= 0);
	}
});