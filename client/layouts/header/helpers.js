Template.navbar.helpers({
	connectionState: 		function(){
		if (Meteor.status().status == "connected")
			return "connected";
		return "disconnected;"
	}
});