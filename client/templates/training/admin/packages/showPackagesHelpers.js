Template.showTrainingPackages.helpers({
	packages: 				function(){
		return trainingPackageCollection.find();
	},

	packageRequirement: 	function(){
		var id = this.substr(0, this.length);
		return trainingRequirementCollection.findOne({_id: id}).name;
	},
});