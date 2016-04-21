Meteor.publish("training.actions", function(pKeyword = false){
	if (!pKeyword)
		return actions.find();
	else
		return actions.find({userID: pKeyword});
});