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
