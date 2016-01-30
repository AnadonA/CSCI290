Template._registerModal.events({
	"submit form": 		function(event){
		event.preventDefault();

		var emailText 		= event.target.registerEmail.value;
		var usernameText 	= event.target.registerUsername.value;
		var passwordText	= event.target.registerPassword.value;

		Accounts.createUser({
			email: 		emailText,
			password: 	passwordText,
			username: 	usernameText
		}, function(result){
			if (result)
				toastr.error(result.reason, "User Registration Failed");
			else{
				toastr.success("User: " + emailText + " registered Successfully", "User Registered Successfully");

				$("#_registerDialog").modal("hide");

				$("#registerEmail").val("");
				$("#registerUsername").val("");
				$("#registerPassword").val("");
			}
		});

	}
});