/*Place for colleciton of Announcements this database will be managed from the communication > Manage announcements. There the
user will be able to add edit or remove a certain announcement. The announcements will be displayed on the home page. */


/* SCHEMA FOR ANNOUNCEMENTS (SUBJECT TO CHANGE)

title: Announcement title
name: David Lopez // person who created it
posted: 4/4/2016 //date it was posted
expires: 4/6/2016 //date it expires or is no longer needed
type : Urgent, On-going, or Notice
information: Hello this announcement is to address... //information that is intended to be posted




				title: Announcement Title
Name: David Lopez		Posted: 4/4/2016	Expires:4/6/2016	Type: Urgent
				Information:



 */


announcementslist = new Mongo.Collection("Announcements", {
	idGeneration: 		"MONGO"
});



announcementslist.allow({
	update:		function(){
		return true;
	},
	
	insert:		function(){
		return true;
	},
	
	remove:		function(){
		return true;
	},
});

