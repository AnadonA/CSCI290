Template.mainLayout.helpers({

	/*	------------------------------------------------------------------------
		DESC: Resets the toggle state of the menu tree toggles.
		------------------------------------------------------------------------	*/
	"afterLoad": 			function(){
		var toggleState		= $(".tree").is("visible");

		$(".tree").toggle(300);

		console.log(toggleState);
	},

	/*	------------------------------------------------------------------------
		DESC: Tests the received path against the currently active path (which is 
		set in the route configuration -- see /lib/routes.js). If they are a match,
		then return the 'active' string. This should be used to set the 'active'
		class for the menu items.
		OUT : 	'active' 	(if the path DOES match the ActivePath variable)
				'inactive' 	(if the path DOES NOT match the ActivePath variable)
		------------------------------------------------------------------------	*/
	"isActivePath": 		function(path){
		//Retrieve the active path value from the current Session
		var activePath 	= Session.get("activePath");

		//Test for path match
		if (activePath == path){
			
			//Paths DO match
			return "active";
		}

		//Paths DO NOT match
		return "inactive";
	},

	/*	------------------------------------------------------------------------
		DESC: Retrieves the UserID of the currently logged in user (if one is 
		actually logged in).
		OUT : 	The ID of the currently logged in user.
			: 	undefined otherwise.
		------------------------------------------------------------------------	*/
	"userID": 				function(){
		return Meteor.userId();
	}
});