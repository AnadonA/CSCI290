Template.showTrainingRequirements.events({
	/*	------------------------------------------------------------------------
		When a requirement panel is clicked, that requirement is stored as the
		selected requirement. The details of this requirement are then presented
		to the user. However, if the clicked requirement was ALREADY selected, 
		it becomes deselected and any visible details are hidden.
		------------------------------------------------------------------------	*/
	"click .requirementPanel": 			function(event, template){
		//	The magic function
		event.preventDefault();

		//	Retrieve the currently selected Training Requirement.
		var selectedRequirement 	= Session.get("selectedTrainingRequirement");

		//	Test the currently selected Training Requirement against the id of
		//	the recently clicked requirement panel. If they are the same then 
		//	de-select the Training Requirement. Otherwise, select the recently
		//	clicked Training Requirement.
		if (selectedRequirement == this._id)
			Session.set("selectedTrainingRequirement", "");
		else
			Session.set("selectedTrainingRequirement", this._id);
	},

	/*	------------------------------------------------------------------------
		When a tag-badge is clicked, it is removed from the tag array for the
		displayed Training Requirement. For posterity the actual array is over-
		written. By doing this, we can avoid having 'blank' entries included in
		the array.
		------------------------------------------------------------------------	*/
	"click .tag-badge": 				function(event, template){
		//	The magic function
		event.preventDefault();

		//	Retrieve the tag text that was clicked on, the ID of the currently 
		//	selected Training Requirement, and the current tag array of the 
		//	selected Training Requirement.
		var tag 	= event.target.parentElement.id.trim();
		var id 		= Session.get("selectedTrainingRequirement");
		var tags	= trainingRequirementCollection.findOne({_id: id}).tags;
		
		//	Use the global function to remove the tag
		if (RemoveTag(tags, tag) >= 0)
			trainingRequirementCollection.update({_id: id}, {$set: {tags: tags}});
	},

	/*	------------------------------------------------------------------------
		When the Training Requirement details have been changed and the user 
		clicks the 'save changes' button, the the changes made to the Requirement
		are retrieved and are used to update the Training Requirement in the 
		database.
		------------------------------------------------------------------------	*/
	"submit form": 					function(event, template){
		//	The magic function
		event.preventDefault();


		//	Collect the new Training Requirement data from the form
		var name		= event.target.requirementName.value;
		var description	= event.target.requirementDescription.value;
		var minScore	= parseFloat(event.target.requirementMinScore.value);
		var quantity	= parseInt(event.target.requirementQty.value);
		var newTags		= event.target.requirementTags.value;

		//	Retrieve the old tag values
		var id 			= Session.get("selectedTrainingRequirement");
		var oldTags		= trainingRequirementCollection.findOne({_id: id}).tags;

		//	Process the new tag values
		if (newTags.length > 0)
			InsertTags(oldTags, newTags);

		//	Store the changes made to the Database.
		trainingRequirementCollection.update(
			{	_id: 	id},
			{	$set: 
				{	name: name,
					description: 	description,
					minimumScore: 	minScore,
					requiredQty: 	quantity,
					tags: 			oldTags
				}
			}
		);

		//	Clear the tags input area. This is done to avoid duplicating any 
		//	changes that have been made to the selected Training Requirement
		//	tag array.
		event.target.requirementTags.value = "";
	},

	/*	------------------------------------------------------------------------
		When the delete button has been clicked, first ensure this is actually 
		what the user wants to do. Then - if it is - remove the Training 
		Requirement entry from the collection.
		------------------------------------------------------------------------	*/
	"click .trDelete": 					function(event, template){
		//	The magic function
		event.preventDefault();

		//	Retrieve the basic information regarding the Training Requirement (ID,
		//	and name). Then, ensure the user actually intends to remove the 
		//	currently selected Training Requirement.
		var id 				= Session.get("selectedTrainingRequirement");
		var name 			= trainingRequirementCollection.findOne({_id: id}).name;
		var confirmation	= confirm("Are you certain you want to delete this requirement (" + name + ")? This action cannot be undone.", "Better Safe Than Sorry");

		//	If the user really intends to remove the document, then do so. Once
		//	the document has been removed, clear the selected Training Requirement
		//	session variable.
		if (confirmation){
			trainingRequirementCollection.remove({_id: id});
			Session.set("selectedTrainingRequirement", "");
		}
	}
});