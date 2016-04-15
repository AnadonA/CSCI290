Meteor.publish("training.actions", function(pKeyword){
	return actions.find();
});