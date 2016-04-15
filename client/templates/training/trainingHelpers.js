Template.training.helpers({
	userLoggedIn: 				function(event, template){
		return (Meteor.loggingIn() || Meteor.user())
	},
});

Template.training.rendered 	= function(){

	var sum 	= 0;
	var data 	= {series: [1, 2, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 0, 3, 0, 0, 3]};

	for (var i = 0; i < data.series.length; i++)
		sum 	+= data.series[i];


	new Chartist.Pie('.ct-chart', data);
};