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

		/*	--------------------------------------------------------------------
			Iterates through each of the users and prepares their profiles with
			the requisite privilege arrays.
			--------------------------------------------------------------------	*/
		svrFixProfiles: 			function(){
			var profile 	= {adm: [], mgr: [], usr: []};

			Meteor.users.find().map(function(doc){
				Meteor.users.update(
					{_id: doc._id}, 
					{$set: {profile: profile}}
				);
			});
		},

		/*	--------------------------------------------------------------------
			Attempts to apply administrative privileges for the provided 
			application to the provided userID. Once the administrative 
			privilege is processeed, managerial privilege is assumed and also
			processed.
			--------------------------------------------------------------------	*/
		svrRegisterAdmin: 				function(pUserID, pApplication){
			//	Case correction on the requested application
			pApplication	= pApplication.trim().toLowerCase();
			
			//	Retrieve the current user's profile
			var profile 	= Meteor.users.findOne({_id: pUserID}).profile;

			//	Test the user's profile for the existence of the requested 
			//	administrative privilege. If it does not exist then push it
			//	onto the array.
			if (profile.adm.indexOf(pApplication) < 0)
				profile.adm.push(pApplication);

			//	Update the user's profile
			Meteor.users.update({_id: pUserID}, {$set: {profile: profile}});

			//	Since the user will be an administrator, also apply managerial
			//	privileges to them.
			svrRegisterManager(pUserID, pApplication);
		},

		svrReleaseAdmin: 			function(pUserID, pApplication){
			pApplication 	= pApplication.trim().toLowerCase();

			var profile 	= Meteor.users.findOne({_id: pUserID}).profile;

			if (profile.adm.indexOf(pApplication) >= 0){
				var index 	= profile.adm.indexOf(pApplication);
				profile.splice(index, 1);
			}

			Meteor.users.update(
				{_id: pUserID},
				{$set: {profile: profile}}
			);
		},

		/*	--------------------------------------------------------------------
			Attempts to apply managerial privilege for the provided application
			to the provided UserID. Once the managerial privilege is processed,
			user privilege is assumed and also processed.
			--------------------------------------------------------------------	*/
		svrRegisterManager: 		function(pUserID, pApplication){
			//	Apply case correction to the application name
			pApplication 	= pApplication.trim().toLowerCase();

			//	Retrieve the current user's profile object
			var profile 	= Meteor.users.findOne({_id: pUserID}).profile;

			//	Test the manager privilege array for the existence of the 
			//	requested application name. If it does not exist, then push it
			//	into the array.
			if (profile.mgr.indexOf(pApplication) < 0)
				profile.mgr.push(pApplication);

			//	Update the user's profile object
			Meteor.users.update(
				{_id: pUserID},
				{$set: {profile: profile}}
			);

			//
			Meteor.call("svrRegisterUser", pUserID, pApplication);
		},

		svrReleaseManager: 			function(pUserID, pApplication){

		},

		svrRegisterUser: 			function(pUserID, pApplication){
			pApplication 	= pApplication.trim().toLowerCase();

			var profile 	= Meteor.users.findOne({_id: pUserID}).profile;

			if (profile.usr.indexOf(pApplication) < 0)
				profile.usr.push(pApplication);

			Meteor.users.update(
				{_id: pUserID},
				{$set: {profile: profile}}
			);
		}
	});
});