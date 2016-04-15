Template.home.helpers({
	userLoggedIn: 				function(event){
		return (Meteor.loggingIn() || Meteor.user())
	},

	'Announcements': function(){
		return announcementslist.find()
	},
	
	'loadallBadge': function(){
		var allBadge = announcementslist.find().count();
		document.getElementById('allButton').innerHTML = allBadge;

		var ongoingBadge = announcementslist.find({type: "Notice"}).count();
		document.getElementById('ongoingButton').innerHTML = ongoingBadge;
		
		var urgentBadge = announcementslist.find({type: "Urgent"}).count();
		document.getElementById('urgentButton').innerHTML = urgentBadge;

	},

	'messageCount': function(pMessageType = "All"){
		var badgeCount = 0;

		switch (pMessageType){
			case "Notice":
				return announcementslist.find({type: "Notice"}).count();

			case "Urgent":
				return announcementslist.find({type: "Urgent"}).count();

			default:
				return announcementslist.find().count();
		}
	}


	
	
});