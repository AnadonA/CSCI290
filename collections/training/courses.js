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
	registerPrerequisite: 		function(pCourseID){

		var courseID 	= courses.findOne(
			{$or: 
				[
					{id: pCourseID},
					{name: {$regex: pCourseID, $options: "i"}}
				]
			})._id;

		if (courseID)
			if (this.prerequisites){
				var prerequisites	= this.prerequisites;

				if (prerequisites.indexOf(courseID) < 0){
					prerequisites.push(courseID);

					courses.update(
						{_id: this._id}, 
						{$set: {prerequisites: prerequisites}}
					);
				}
			}
			else{
				courses.update(
					{_id: this._id}, 
					{$set: {prerequisites: [courseID]}}
				);
			}
	},

	/*	------------------------------------------------------------------------
		Attempts to remove the provided CourseID from the prerequisite array of
		the current Course. If the provided CourseID exists then splice it out
		of the array and update the Course.
		------------------------------------------------------------------------	*/
	removePrerequisite: 		function(pCourseID){
		if (pCourseID)
			if (this.prerequisites){
				var prerequisites	= this.prerequisites;
				var index 			= prerequisites.indexOf(pCourseID);

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