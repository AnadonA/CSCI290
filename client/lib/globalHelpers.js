/*	----------------------------------------------------------------------------
	Registers a global helper function named 'serverStatus' that returns the 
	current connection status of the MeteorJS server.
	----------------------------------------------------------------------------	*/
Handlebars.registerHelper('serverStatus', function(){
	return (Meteor.status().status == "connected");
});

/*	----------------------------------------------------------------------------
	Registers a global helper function named 'todaysDate' that returns the 
	current date (as stored in the Server itself).
	----------------------------------------------------------------------------	*/
Handlebars.registerHelper('todaysDate', function(){
	var today 	= new Date();
	return today.toLocaleDateString();
});

/*	----------------------------------------------------------------------------
	Registers a global helper function named 'IsAdmin' that tests the currently
	logged in user for administrative privileges to the provided Application.
	Returns true if the Application name is listed in the users profile.adm 
	array.
	----------------------------------------------------------------------------	*/
Handlebars.registerHelper('clnIsAdmin', function(pApplication){
	if (Meteor.userId()){
		//	Case correct the application name
		pApplication 	= pApplication.trim().toLowerCase();
		var user		= Meteor.users.findOne({_id: Meteor.userId(), profile: {$exists: true}});

		if (user)
			if (user.profile)
				if (user.profile.adm.indexOf(pApplication) >= 0)
					return true;
	}

	return false;
});