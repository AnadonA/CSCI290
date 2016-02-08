Template.trainingAdmin.helpers({

	/*	------------------------------------------------------------------------
		Retrieves the ENTIRE collection of training requirements and returns it.

		--	This function will need to be changed later on in order to save 
			memory and processing power. --
		------------------------------------------------------------------------	*/
	requirements: 			function(){
		//	Retrieve the Training Requirement collection
		return trainingRequirementCollection.find();
	},

	/*	------------------------------------------------------------------------
		Retrieves the current training administration button selection state 
		from the Session variable and compares it to the provided ButtonName. If
		they match, then it is the active selection and the appropriate CSS tag
		is returned.
		------------------------------------------------------------------------	*/
	buttonState: 			function(pButtonName){
		//	Retrieve the current Training Admin Selection
		var selection = Session.get(taSelection);

		//	Compare the ButtonName to the retrieved Selection and return the 
		//	appropriate CSS tag.
		if (selection.indexOf(pButtonName) >= 0)
			return "btn-primary";
		return "btn-default";
	},

	/*	------------------------------------------------------------------------
		Retrieves the current Training Administration selection state and returns
		true if the focus is on 'Packages'. If the focus is elsewhere, it returns
		false.
		------------------------------------------------------------------------	*/
	showPackages: 			function(){
		return (Session.get(taSelection).indexOf("Packages") >= 0);
	}
});