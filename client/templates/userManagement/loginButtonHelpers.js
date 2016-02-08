Template.loginButton.helpers({

	/*	------------------------------------------------------------------------
		Returns a Font-Awesome Icon class that will actively spin the cog icon. 
		This will provide the developers with an active indication of the state	 
		of the Meteor connection.
		------------------------------------------------------------------------	*/
	"serverStatus": 		function(){
		if (ServerConnected())
			return "fa-spin"
	},

	/*	------------------------------------------------------------------------
		Returns the users name; as split from their email address. This should 
		prove well enough to be a basic name.
		------------------------------------------------------------------------	*/
	"username": 			function(){
		if (Meteor.user().username)
			return Meteor.user().username;
		else{
			var address	= Meteor.user().emails[0].address;
			var atSign	= address.indexOf("@");
			return address.split("@")[0];
		}
	}
});