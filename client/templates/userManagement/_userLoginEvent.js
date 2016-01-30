Template._loginModal.events({

	'click #loginRegister': 	function(event){
		event.preventDefault();
		
		$("#_loginDialog").modal("hide");
	},

	'submit form': 		function(event){
		event.preventDefault();

		var emailText		= event.target.loginEmail.value;
		var passwordText	= event.target.loginPassword.value;

		Meteor.loginWithPassword(emailText, passwordText, function(arg){
			if (arg == undefined){

				toastr.success(Meteor.user().emails[0].address + " has successfully logged in.", "User Logged In");

				$("#_loginDialog").modal("hide");
				$("#loginEmail").val("");
				$("#loginPassword").val("");
			}
			else{
				toastr.error(arg.reason, "User Login Failed");
			}
		});
	}
});