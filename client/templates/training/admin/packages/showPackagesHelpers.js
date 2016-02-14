Template.showTrainingPackages.helpers({
	packages: 				function(){
		return [];
	},

	packageRequirement: 	function(){
		var id = this.substr(0, this.length);
		return "N/A";
	},
});