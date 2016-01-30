Template.home.helpers({
	userLoggedIn: 				function(event){
		return (Meteor.loggingIn() || Meteor.user())
	}
});