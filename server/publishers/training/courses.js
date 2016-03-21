/*	----------------------------------------------------------------------------
	Training Course Document Schema
	----------------------------------------------------------------------------

	NAME: 		The unique ID used to identify the course in the system.
	SECTION: 	
	TITLE: 		The short title of the course.
	NOTES: 		
	UNITS: 		
	TYPE: 		
*/

Meteor.publish("training.courses", function(){
	return courses.find({},
		{sort: {Name: 1}});
});

Meteor.publish("training.courses", function(pKeyword){
	if (pKeyword)
		return courses.find({$or: [
			{Name: 		{$regex: /pKeyword/i}},
			{Title: 	{$regex: /pKeyword/i}},
			{Units: 	{$regex: /pKeyword/i}},
		]},
		{sort: {Name: 1}});

	return courses.find();
});