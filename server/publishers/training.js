
Meteor.publish("training.requirements", function(pKeyword){
	if (pKeyword)
		return trainingRequirements.find({keywords: {'$regex': pKeyword}});

	return trainingRequirements.find();
});

Meteor.publish("training.courses", function(pKeyword){
	if (pKeyword)
		return trainingCourses.find({$or: 
			[
				{code: 			{$regex: /pKeyword/i}},
				{name: 			{$regex: /pKeyword/i}}, 
				{description: 	{$regex: /pKeyword/i}}
			]
		});
});