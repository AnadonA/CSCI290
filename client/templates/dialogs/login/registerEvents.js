Template._registerModal.events({
	"submit form": 		function(event){
		event.preventDefault();

		var emailText 		= event.target.registerEmail.value;
		var passwordText	= event.target.registerPassword.value;

		Accounts.createUser({
			email: 		emailText,
			password: 	passwordText
		});

		console.log("User: " + emailText + " successfully created.");
	}
});