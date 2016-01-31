Template._loginModal.events({

	'click #loginRegister': 	function(event, template){
		event.preventDefault();
		
		$("#_loginDialog").modal("hide");
	},

	'submit form': 				function(event, template){
		event.preventDefault();

		var emailText		= event.target.loginEmail.value;
		var passwordText	= event.target.loginPassword.value;

		Meteor.loginWithPassword(emailText, passwordText, function(arg){
			if (arg == undefined){

				toastr.success(Meteor.user().emails[0].address + " has successfully logged in.", "User Logged In");

				//	Clear the form of all entries and hide it
				template.find("form").reset();
				$("#_loginDialog").modal("hide");
			}
			else{
				//	Clear the form of all entries and alert the user of the failed
				//	attempt a logging-in.
				template.find("form").reset();
				toastr.error(arg.reason, "User Login Failed");
			}
		});
	}
});