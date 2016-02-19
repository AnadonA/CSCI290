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
		{sort: {name: 1}});
});

Meteor.publish("training.courses", function(pKeyword){
	if (pKeyword)
		return courses.find({$or: [
			{name: 	{$regex: /pKeyword/i}},
			{section: 	{$regex: /pKeyword/i}},
			{title: 	{$regex: /pKeyword/i}},
			{notes: 	{$regex: /pKeyword/i}},
			{units: 	{$regex: /pKeyword/i}},
			{type: 		{$regex: /pKeyword/i}}
		]},
		{sort: {name: 1}});

	return courses.find();
})