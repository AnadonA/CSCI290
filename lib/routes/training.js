//	----------------------------------------------------------------------------
//	TRAINING ROUTE DEFINITIONS
//	----------------------------------------------------------------------------
Router.route('training',
	{
		name: 				"Training Home",
		template: 			"training",

		data: 				function(){
			Session.set("activePath", "Training Home");
		},

		onAfterAction: 		function(){
		}
	}
);

Router.route('training/admin',
	{
		name: 				"Training Admin",
		template: 			"trainingAdmin",

		onBeforeAction: 	function(){
			//	Default the admin selection if none yet exists.
			var Selection =		Session.get("training.admin.activePath");
			if (Selection == undefined)
				Session.set("training.admin.activePath", "courses");

			//	Reset session variables
			Session.set("training.courses.keyword", undefined);
			
			this.next();
		},

		data: 				function(){
			Session.set("activePath", "Training Admin");

		},

		subscriptions: 		function(){
			this.subscribe("training.courses").wait();
		}
	}
);