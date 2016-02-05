Router.configure({
	/*	------------------------------------------------------------------------
		By setting the LayoutTemplate in the Router.configure function, we can
		effectively ensure that ALL pages will utilize the same layout. This is
		done to keep the same header, footer and sidebar-menu on ALL pages.
		------------------------------------------------------------------------	*/
	layoutTemplate: 		"mainLayout"
});


//	-----------------------------------------------------------------------------
//	HOME ROUTE DEFINITION														
//	-----------------------------------------------------------------------------
Router.route('/',
	{	
		name: 				"home",
		template: 			"home",

		data: 				function(){
			Session.set("activePath", "home");
		}
	}
);

//	----------------------------------------------------------------------------
//	TRAINING ROUTE DEFINITIONS
//	----------------------------------------------------------------------------
Router.route('training',
	{
		name: 				"Training Home",
		template: 			"training",

		data: 				function(){
			Session.set("activePath", "Training Home");
		}
	}
);

Router.route('training/admin',
	{
		name: 				"Training Admin",
		template: 			"trainingAdmin",

		onBeforeAction: 	function(){
			var Selection =		Session.get("taSelection");

			if (Selection == undefined)
				Session.set("taSelection", "Packages");
			
			this.next();
		},

		data: 				function(){
			Session.set("activePath", "Training Admin");

		}
	}
);

Router.route('training/user/:userID',
	{
		name: 				"User Training",
		template: 			"userTraining",

		data: 				function(){
			Session.set("activePath", "User Training");
			
			return 
		},

		waitOn: 			function(){
			return 
			[
				//Meteor.subscribe("trainingRequirementCollection"),
				//Meteor.subscribe("trainingPackageCollection")
			];
		}
	}
);