Template.mainLayout.events({
	"click .logAction": 			function(event, target){
		event.preventDefault();

		if (Meteor.user())
			Meteor.logout();
	}
});