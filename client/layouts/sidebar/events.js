Template.sidebar.events({
	/*	------------------------------------------------------------------------
		This function (and its sibling) hides the extra menus for the menu trees.
		------------------------------------------------------------------------	*/
	"click .tree-toggle-comm": 			function(event, template){
		$(".tree-toggle-comm").children(".tree").toggle(300);
	},

	"click .tree-toggle-train": 		function(event, template){
		$(".tree-toggle-train").children(".tree").toggle(300);
	}
});