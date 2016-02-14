Template.trainingAdminNavbar.events({
	"click .coursesButton": 			function(event, template){
		event.preventDefault();

		Session.set("training.admin.activePath", event.target.id);
	},

	"click .degreesButton": 			function(event, template){
		event.preventDefault();

		Session.set("training.admin.activePath", event.target.id);
	}
});