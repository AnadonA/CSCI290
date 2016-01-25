Router.configure({
	layoutTemplate: 		"mainLayout"
});

//	+---------------------------------------------------------------------------+
//	| HOME ROUTE DEFINITION														|
//	+---------------------------------------------------------------------------+
Router.route('/',
	{	
		template: 			"hello",

		data: 		function(){
			console.log("Viewing the Home Route.");
		}
	}
);

