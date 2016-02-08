Template.training.helpers({
	userLoggedIn: 				function(event, template){
		return (Meteor.loggingIn() || Meteor.user())
	},

	createChart: 				function(event, template){
		return "... chart will go here ..."
	}
});