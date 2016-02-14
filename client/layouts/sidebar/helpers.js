Template.navbar.helpers({
	/*	------------------------------------------------------------------------
		DESC: Resets the toggle state of the menu tree toggles.
		------------------------------------------------------------------------	*/
	afterLoad: 			function(){
		var toggleState		= $(".tree").is("visible");

		$(".tree").toggle(300);
	},


});