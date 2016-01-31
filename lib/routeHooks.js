var beforeHooks	= {
	isLoggedIn: 			function(pause){
		if (!(Meteor.loggingIn() || Meteor.user())){
			$("#_loginDialog").modal("show");
		}

		console.log("Before Hook: ", Router.current().route.path(this).replace("/", ""));

		this.next();
	}

}

//	Apply the before action router hooks to IronRouter
Router.onBeforeAction(beforeHooks.isLoggedIn);