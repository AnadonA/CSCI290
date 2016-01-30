Template._editUserModal.helpers({

	"userExists": 			function(){
		if (Meteor.userId())
			return (Meteor.user() != undefined);
	},
	"userEmail": 			function(){
		if (Meteor.userId())
			return Meteor.user().emails[0].address;
	},

	"userName": 			function(){
		if (Meteor.userId())
			return Meteor.user().username;
	}
});