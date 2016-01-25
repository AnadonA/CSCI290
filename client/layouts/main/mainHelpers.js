Template.mainLayout.helpers({
	"username": 		function(){
		return Meteor.user().emails[0].address;
	}
});