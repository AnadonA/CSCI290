Template.mainLayout.events({
	"click .tree-toggle": 			function(event, template){
		$(".tree-toggle").children(".tree").toggle(300);
	}
});