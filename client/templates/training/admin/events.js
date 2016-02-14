Template.trainingAdmin.events({
	/*	------------------------------------------------------------------------
		Stores the selected training focus (requirements or packages) in its
		relative Session location.
		------------------------------------------------------------------------	*/
	"click .taSelection": 			function(event, template){
		var	btnText		= event.target.innerHTML.trim();

		Session.set(taSelection, btnText);
	}
});