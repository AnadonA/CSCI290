actions 	= new Mongo.Collection("training.actions");

actions.allow({
	insert: 		function(){
		return true;
	},

	update: 		function(){
		return true;
	},

	remove: 		function(){
		return true;
	}
})