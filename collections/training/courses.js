/*	----------------------------------------------------------------------------
	Training Course Document Schema
	----------------------------------------------------------------------------

	NAME: 		The unique ID used to identify the course in the system.
	SECTION: 	
	TITLE: 		The short title of the course.
	NOTES: 		
	UNITS: 		
	TYPE: 		

	----------------------------------------------------------------------------	*/
course	= function(doc){
	_.extend(this, doc);
};

/*	----------------------------------------------------------------------------
	Course prototype extensions. These functions are those that can be performed
	on ALL course objects. Which is a benefit to the programmer since ALL 
	documents stored in the courses collection will be converted into course
	objects at runtime.
	----------------------------------------------------------------------------	*/
course.prototype	= {
	constructor: 	course,

	/*	------------------------------------------------------------------------
		Attempts to register the provided CourseID as a prerequisite for the 
		current course. If the provided CourseID does not currently exist in the
		prerequisite array, then add it and update the Course.
		------------------------------------------------------------------------	*/
	registerPrerequisite: 		function(pCourseCriteria){
		//	Subscribe to the Training Courses collection so that we can modify
		//	collection entries.
		Meteor.subscribe("training.courses");
		
		//	Retrieve the _id of the first course that matches the provided 
		//	criteria (if one exists).
		var courseID 	= courses.findOne(
			{$or: 
				[
					{id: pCourseCriteria},
					{Name: 	{$regex: pCourseCriteria, $options: "i"}},
					{Title: {$regex: pCourseCriteria, $options: "i"}}
				]
			});

		//	If there was a course that matched the provided criteria, then add 
		//	register IT as a prerequisite of the course.
		if (courseID){
			courseID 	= courseID._id;

			if (this.prerequisites){
				var exists 			= false;
				var prerequisites	= this.prerequisites;

				//	If the current prerequisites list already includes one or
				//	more prerequisite entries.
				if (prerequisites.length > 0){
					//	Look for the identified prerequisite in the current 
					//	prerequisite list.
					for (i = 0; i < prerequisites.length; i++){
						if (prerequisites[i]._str == courseID._str){
							exists 		= true;
							console.log("The requested prerequisite already exists in the array.");
							break;
						}
					}

					//	If the identified prerequisite does not already exist in 
					//	the prerequisite list then push it into the list and update
					//	the current course in the collection.
					if (!exists && courseID._str != this._id._str){
						prerequisites.push(courseID);

						courses.update(
							{_id: this._id}, 
							{$set: {prerequisites: prerequisites}}
						);
					}
				}
				//	If the current prerequisites list is empty, then simply
				//	update the current course in the collection to include the
				//	identified prerequisite (an array of 1).
				else
				{
					courses.update(
						{_id: this._id},
						{$set: 	{prerequisites: [courseID]}}
					);
				}
			}
		}
		else {
			console.log("A prerequisite of including the requested criteria (" + pCourseCriteria + ") was not found.");
		}
	},

	/*	------------------------------------------------------------------------
		Attempts to remove the provided CourseID from the prerequisite array of
		the current Course. If the provided CourseID exists then splice it out
		of the array and update the Course.
		------------------------------------------------------------------------	*/
	removePrerequisite: 		function(pCourseID){

		console.log(pCourseID);

		if (pCourseID)

			if (this.prerequisites){	
				var index 			= -1;			
				var prerequisites	= this.prerequisites;

				for (i = 0; i < prerequisites.length; i++){
					console.log(pCourseID, prerequisites[i]);
					if (prerequisites[i]._str == pCourseID){
						index 	= i;
						break;
					}
				}

				console.log(index);

				if (index >= 0){
					prerequisites.splice(index, 1);
					courses.update({_id: this._id}, {$set: {prerequisites: prerequisites}});
				}
			}
	}
};

/*	----------------------------------------------------------------------------
	Creates the collection of Training Courses. Upon creation, each of their 
	Training Course documents are transformed into TrainingCourse objects for
	simplified use.
	----------------------------------------------------------------------------	*/
courses		= new Mongo.Collection("training.courses", {
	idGeneration: 	"MONGO",
	transform: 		function(doc){
		return new course(doc);
	}
});


/*	----------------------------------------------------------------------------
	Allow complete access to update course documents.
	----------------------------------------------------------------------------	*/
courses.allow({
	update: 		function(){
		return true;
	},

	insert: 		function(){
		return true;
	},

	
});

courses.deny({

});