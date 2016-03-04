Template.trainingAdminNavbar.events({
	"click .btn": 			function(event, template){
		event.preventDefault();

		Session.set("training.admin.activePath", event.target.id);
	}
});