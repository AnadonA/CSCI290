Template._editUserModal.events({
	'submit form': 			function(event){
		event.preventDefault();

		var userID 			= Meteor.userId();
		var usernameText	= event.target.editUserName.value;
		var emailText		= event.target.editUserEmail.value;

		Meteor.users.update({_id: userID}, {$set: {username: usernameText}});
	}
});