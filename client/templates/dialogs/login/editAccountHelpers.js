Template._editUserModal.helpers({

	"userExists": 			function(){
		return (Meteor.user() != undefined);
	},
	"userEmail": 			function(){
		return Meteor.user().emails[0].address;
	},

	"userName": 			function(){
		return Meteor.user().username;
	}
});