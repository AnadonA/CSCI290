var beforeHooks	= {
	isLoggedIn: 			function(pause){
		if (!(Meteor.loggingIn() || Meteor.user())){
			$("#_loginDialog").modal("show");
		}

		this.next();
	}

}

//	Apply the before action router hooks to IronRouter
Router.onBeforeAction(beforeHooks.isLoggedIn);