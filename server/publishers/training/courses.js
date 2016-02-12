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

Meteor.publish("training.courses");

Meteor.publish("training.courses", function(pKeyword){
	if (pKeyword)
		return courses.find({$or: [
			{name: 	{$regex: /pKeywrod/i}},
			{section: 	{$regex: /pKeywrod/i}},
			{title: 	{$regex: /pKeywrod/i}},
			{notes: 	{$regex: /pKeywrod/i}},
			{units: 	{$regex: /pKeywrod/i}},
			{type: 		{$regex: /pKeywrod/i}}
		]});

	return courses.find();
})