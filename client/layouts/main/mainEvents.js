Template.mainLayout.events({
	'click #logout': 		function(event){
		event.preventDefault();

		if (Meteor.userId()){
			Meteor.logout();
			console.log("User has been successfully logged out.");
		}
	}
})