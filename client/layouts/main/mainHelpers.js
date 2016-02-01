Template.mainLayout.helpers({

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
		var activePath 	= Router.current().route.path(this).replace("/", "");

		//Test for path match
		if (activePath == path){
			
			//Paths DO match
			return "active";
		}

		//Paths DO NOT match
		return "inactive";
	},

	"isAdmin": 				function(application){
		var userID	= Meteor.userId();
		var appDoc	= adminCollection.find({application: application}).fetch()[0];

		if (appDoc){
			
			var admins 	= appDoc.administrators;

			for (i = 0; i < admins.length; i++)
				if (admins[i] == userID)
					return true;
		}

		return false;
	}
});