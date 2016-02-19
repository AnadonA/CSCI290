Template.mainLayout.events({
	/*	------------------------------------------------------------------------
		Logs the user out if they click the 'logout' button.
		------------------------------------------------------------------------	*/
	"click .logAction": 			function(event, target){
		event.preventDefault();

		if (Meteor.user())
			Meteor.logout();
	}
});