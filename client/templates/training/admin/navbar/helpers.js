Template.trainingAdminNavbar.helpers({
	isActivePath: 			function(pPathName){
		var target 	= Session.get("training.admin.activePath");
		if (target == pPathName)
			return "btn-primary";
		return "btn-default";
	}
});