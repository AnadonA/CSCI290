// COMMUNICATION ROUTE DEFINITIONS

Router.route('Communication',
	{
		name:				"Communication",
		template:			"Communication",
		
		data: 				function(){
			Session.set("activePath", "Communication");
		}

	}
);


Router.route('Communication/ManageAnnoucements',
	{
		name:				"Communication Manage Announcements",
		template:			"CommunicationManageAnnouncements",

		data: 				function(){
			Session.set("activePath", "Communication Manage Announcements");
		}
	
	}
);


Router.route('Communication/Support',
	{
		name:				"Communication Support",
		//template:			"CommunicationSupport",

		data: 				function(){
			Session.set("activePath", "Communication Support");
		}
	
	}
);

