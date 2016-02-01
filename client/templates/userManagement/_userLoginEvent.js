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

				//	Hide the log-in dialog
				$("#_loginDialog").modal("hide");
			}
			else{
				//	Alert the user of the failed log-in attempt
				toastr.error(arg.reason, "User Login Failed");
			}

		});

		//	Clear the form of all entries
		template.find("form").reset();
	}
});