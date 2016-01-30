Template.training.helpers({
	userLoggedIn: 				function(event){
		return (Meteor.loggingIn() || Meteor.user())
	}
});