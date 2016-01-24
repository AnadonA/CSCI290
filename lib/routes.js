//	+---------------------------------------------------------------------------+
//	| HOME ROUTE DEFINITION														|
//	+---------------------------------------------------------------------------+
Router.route('/',
	{	
		template: 			"hello",
		layoutTemplate: 	"mainLayout",

		data: 		function(){
			console.log("Viewing the Home Route.");
		}
	}
);

