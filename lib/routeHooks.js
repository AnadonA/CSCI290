/*	----------------------------------------------------------------------------
	Ensure the user is logged in before they can do anything. This function will
	present the log-in modal dialog after EVERY router transaction until the
	user has successfully logged in.
	----------------------------------------------------------------------------	*/
var beforeHooks	= {
	isLoggedIn: 			function(pause){
		if (!(Meteor.loggingIn() || Meteor.user())){
			$("#_loginDialog").modal("show");
		}

		this.next();
	}

}

/*	----------------------------------------------------------------------------
	Apply the before action router hook(s) to IronRouter
	----------------------------------------------------------------------------	*/
Router.onBeforeAction(beforeHooks.isLoggedIn);