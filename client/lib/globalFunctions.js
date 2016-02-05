/*	----------------------------------------------------------------------------
	DESC: 	Tests for a valid connection to an active MeteorJS application. If 
		one exists, it returns true. Otherwise it returns false. This function 
		can be used to inform the user of a change in connection status.
	OUT : 	True (if a valid server connection exists)
			False (otherwise)
	----------------------------------------------------------------------------	*/
ServerConnected	= function(){
	return (Meteor.status().status == "connected");
}

UserIsAdmin		= function(application, userID){
	adminCollection.find({application: application}).map(
		function(document){
			console.log(document._ID);
	});
}

Handlebars.registerHelper('serverStatus', function(){
	return (Meteor.status().status == "connected");
});