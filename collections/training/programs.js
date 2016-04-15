programs 	= new Mongo.Collection("training.programs", {
	idGeneration: 		"MONGO"
});

/*	----------------------------------------------------------------------------
	Allow complete access to update course documents.
	----------------------------------------------------------------------------	*/
programs.allow({
	update: 		function(){
		return true;
	},

	insert: 		function(){
		return true;
	},

	
});

programs.deny({
	remove: 		function(){
		return false;
	}
});