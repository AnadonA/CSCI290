






Meteor.publish("Announcements", function(){
	return announcementslist.find()
});