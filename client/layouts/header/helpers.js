Template.navbar.helpers({
	/*	------------------------------------------------------------------------
		Tests the Meteor Server connection status and returns a class string for
		affecting stylized on|off. This is used to alert the user of a faulty 
		connection.
		------------------------------------------------------------------------	*/
	connectionState: 		function(){
		if (Meteor.status().status == "connected")
			return "connected";
		return "disconnected;"
	}
});