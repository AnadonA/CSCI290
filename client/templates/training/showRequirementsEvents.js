Template.showTrainingRequirements.events({
	"click .requirementPanel": 			function(event, template){
		var selectedRequirement 	= Session.get("selectedTrainingRequirement");
		if (selectedRequirement == this._id)
			Session.set("selectedTrainingRequirement", "");
		else
			Session.set("selectedTrainingRequirement", this._id);
	},

	"click .tag-badge": 				function(event, template){
		var tag 	= event.target.parentElement.id.trim();
		var id 		= Session.get("selectedTrainingRequirement");
		var tags	= trainingRequirementCollection.findOne({_id: id}).tags;
		var index 	= -1;

		for (i = 0; i < tags.length; i++){
			if (tags[i].text.trim() == tag){
				index = i;
				break;
			}
		}

		if (index >= 0){
			tags.splice(index, 1);
			trainingRequirementCollection.update({_id: id}, {$set: {tags: tags}});
		}
	},

	"submit form": 					function(event, template){
		event.preventDefault();


		//Collect the new data
		var name		= event.target.requirementName.value;
		var description	= event.target.requirementDescription.value;
		var minScore	= parseFloat(event.target.requirementMinScore.value);
		var quantity	= parseInt(event.target.requirementQty.value);
		var newTags		= event.target.requirementTags.value;

		//Retrieve the old tag values
		var id 			= Session.get("selectedTrainingRequirement");
		var oldTags		= trainingRequirementCollection.findOne({_id: id}).tags;

		//Process the new tag values
		var Tags01		= newTags.split(";");
		for (i = 0; i < Tags01.length; i++){
			var Tags02	= Tags01[i].split(",");

			for (j = 0; j < Tags02.length; j++){

				var tagMatch	= false;
				var corrected	= Tags02[j].trim().toLowerCase();

				for (k = 0; k < oldTags.length; k++){
					var oldTag 	= oldTags[k].text.trim().toLowerCase();

					if (oldTag == corrected)
						tagMatch = true;
				}

				if (!tagMatch)
					oldTags.push({text: corrected});
			}
		}

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

		event.target.requirementTags.value = "";

	},

	"click .trDelete": 					function(event, template){
		event.preventDefault();

		var id 				= Session.get("selectedTrainingRequirement");
		var name 			= trainingRequirementCollection.findOne({_id: id}).name;
		var confirmation	= confirm("Are you certain you want to delete this requirement (" + name + ")?", "Better Safe Than Sorry");

		if (confirmation){
			trainingRequirementCollection.remove({_id: id});
			Session.set("selectedTrainingRequirement", "");
		}
	}
});