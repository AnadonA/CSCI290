Template._editUserModal.helpers({

	"userExists": 			function(){
		if (Meteor.user() != undefined)
			return true;

		return false;
	},
	"userEmail": 			function(){
		if (Meteor.user() != undefined)
			return Meteor.user().emails[0].address;
	},

	"userName": 			function(){
		if (Meteor.user() != undefined)
			return Meteor.user().username;
	}
});