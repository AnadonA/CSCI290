Template.trainingAdmin.events({
	"click .taSelection": 			function(event, template){
		Session.set("taSelection", event.target.innerHTML);
	}
});