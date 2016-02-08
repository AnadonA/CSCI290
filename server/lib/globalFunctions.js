Meteor.startup(function(){
	Meteor.methods({
		/*	--------------------------------------------------------------------
			Attempts to change the users - identified by the provided UserID - 
			username.
			--------------------------------------------------------------------	*/
		svrChangeUserName: 		function(pUserID, pNewUserName){
			Meteor.users.update({_id: pUserID}, {$set: {username: pNewUserName}});
		},

		/*	--------------------------------------------------------------------
			Removes the requested user - identified by the provided UserID - from
			the Meteor Users database. This method has been created within the 
			server side of the application to ensure that it cannot be performed
			by the client.
			--------------------------------------------------------------------	*/
		svrRemoveUser: 				function(pUserID){
			Meteor.users.remove({_id: pUserID});
		},

		svrFixProfiles: 			function(){
			var profile 	= {adm: [], mgr: [], usr: []};

			Meteor.users.find().map(function(doc){
				Meteor.users.update({_id: doc._id}, {$set: {profile: profile}});
			});
		},

		svrMakeAdmin: 				function(pUserID, pApplication){
			//	Case correction on the requested application
			pApplication	= pApplication.trim().toLowerCase();
			
			var profile 	= Meteor.users.findOne({_id: pUserID}).profile;

			if (profile.adm.indexOf(pApplication) < 0)
				profile.adm.push(pApplication);

			if (profile.mgr.indexOf(pApplication) < 0)
				profile.mgr.push(pApplication);

			if (profile.usr.indexOf(pApplication) < 0)
				profile.usr.push(pApplication);

			Meteor.users.update({_id: pUserID}, {$set: {profile: profile}});
		},

		svrMakeManager: 			function(pUserID, pApplication){

		}
	});
});