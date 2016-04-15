Meteor.startup(function(){
	$(window).resize(function(event){
		if ($(".nano").length > 0){
			Session.set("nano.Width", $(".nano").outerWidth());
		}
	});
});