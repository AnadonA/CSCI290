/*
	trainingAction Definition
	_id: 		unique Mongo.ObjectID(...) of the trainingAction
	user: 		unique UserID of the user who performed said action
	course: 	unique trainingCourseID that is the focus of the action
	grade: 		A - F; P - NP
	year: 		year of the action
	semester: 	1 Spring, 2 Summer, 0 Fall
*/
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