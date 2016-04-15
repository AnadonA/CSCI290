Template.CommunicationManageAnnouncements.helpers({

userLoggedIn: 				function(event){
		return (Meteor.loggingIn() || Meteor.user())
	},

'Announcements': function(){
		return announcementslist.find()
}

});