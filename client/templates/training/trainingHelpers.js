Template.training.helpers({
	userLoggedIn: 				function(event, template){
		return (Meteor.loggingIn() || Meteor.user())
	},

	trainingActions: 			function(event, template){
		return actions.find({userID: Meteor.userId()}, {sort: {semester: 1}});
	},

	courseName: 				function(event, template){
		return courses.findOne({_id: this.course}).Name;
	}
});

Template.training.rendered 	= function(){

	var activities 	= [
		{ userID:'rjweGRuujqTfBhhKS', course:'MCSCI-201', credits:  3 , grade:'A', semester:'  ', transfer:  1 },
		{ userID:'rjweGRAujqTfBhhKS', course:'MGENEX-000', credits:  3 , grade:'*', semester:'  ', transfer:  1 },
		{ userID:'rjweGRuujqTfBhhKS', course:'MMATH-70', credits:  4 , grade:'A', semester:'  ', transfer:  1 },
		{ userID:'rjweGRuujqTfBhhKS', course:'MCSCI-270', credits:  3 , grade:'A', semester:'  ', transfer:  1 },
		{ userID:'rjweGRuujqTfBhhKS', course:'MCMPSC-274', credits:  3 , grade:'A', semester:'  ', transfer:  1 },
		{ userID:'rjweGRuujqTfBhhKS', course:'MCSCI-252', credits:  3 , grade:'A', semester:' 2015MFA ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MCSCI-210', credits:  3 , grade:'A', semester:' 2015MFA ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MART-102', credits:  3 , grade:'B', semester:' 2015MFA ', transfer:  0 },
		{ userID:'rjweGRuujqTfBhhKS', course:'MGUIDE-110', credits:  0.5 , grade:'P', semester:' 2015MSP ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MCSCI-253', credits:  3 , grade:'A', semester:' 2015MSP ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MCSCI-271', credits:  4 , grade:'A', semester:' 2015MSP ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MCSCI-232', credits:  3 , grade:'A', semester:' 2015MSP ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MCSCI-221', credits:  3 , grade:'A', semester:' 2015MSP ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MPSYCH-103', credits:  3 , grade:'B', semester:' 2014MFA ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MENGL-103', credits:  3 , grade:'A', semester:' 2014MFA ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MCSCI-270', credits:  3 , grade:'A', semester:' 2014MFA ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MECON-102', credits:  3 , grade:'B', semester:' 2014MSP ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MENGL-157', credits:  3 , grade:'B', semester:' 2014MSP ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MPSYCH-101', credits:  3 , grade:'A', semester:' 2014MSP ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MHIST-129', credits:  3 , grade:'B', semester:' 2014MSP ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MAGEC-225', credits:  3 , grade:'A', semester:' 2014MSU ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MCHEM-150', credits:  3 , grade:'A', semester:' 2014MSU ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MPSYCH-110', credits:  3 , grade:'A', semester:' 2014MSU ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MART-160', credits:  3 , grade:'A', semester:' 2013MFA ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MHUMAN-110', credits:  3 , grade:'A', semester:' 2013MFA ', transfer: 0  },
		{ userID:'rjweGRuujqTfBhhKS', course:'MENGL-101', credits:  3 , grade:'A', semester:' 2013MSU ', transfer: 0  },
	];


	var sum 	= 0;
	var data 	= { labels: [],
					series: [[]]};

	for (var i = 0; i < activities.length; i++){
		sum 	+= activities[i].credits;
		if (data.labels.indexOf(activities[i].semester.trim()) < 0)
			data.labels.push(activities[i].semester.trim());
	}

	for (var i = 0; i < data.labels.length; i++){
		var value 		= 0;
		var semester 	= data.labels[i];

		for (var j = 0; j < activities.length; j++){
			if (activities[j].semester.trim() == semester)
				value 	+= activities[j].credits;
		}

		value 	= (i == 0) ? value : value + data.series[0][i - 1];
		data.series[0].push(value);
	}

	var options = { height: '400px'};
	var chart 	= new Chartist.Line('.ct-chart', data, options);

	var seq 	= 0,
		delays	= 10,
		durations 	= 500;

	chart.on('created', function(){
		seq		= 0;
	});

	chart.on('draw', function(data){
		seq ++;

		if (data.type === 'line'){
			data.element.animate({
				opacity: {
					begin: seq * delays + 500,
					dur: durations,
					from: 0,
					to: 1
				}
			});
		}

		else if(data.type === 'label' && data.axis === 'x'){
			data.element.animate({
				y: {
					begin: seq * delays,
					dur: durations,
					from: data.y + 100,
					to: data.y,
					easing: 'easeOutQuart'
				}
			});
		}

		else if (data.type === 'label' && data.axis === 'y'){
			data.element.animate({
				x: {
					begin: seq * delays,
					dur: durations,
					from: data.x - 100,
					to: data.x,
					easing: 'easeOutQuart'
				}
			});
		}

		else if (data.type === 'point'){
			data.element.animate({
				x1: {
					begin: seq * delays,
					dur: durations,
					from: data.x - 30,
					to: data.x,
					easing: 'easeOutQuart'
				},
				x2: {
					begin: seq * delays,
					dur: durations,
					from: data.x - 50,
					to: data.x,
					easing: 'easeOutQuart'
				},
				opacity: {
					begin: seq * delays,
					dur: durations,
					from: 0,
					to: 1,
					easing: 'easeOutQuart'
				}
			});
		}
	});

	chart.on('created', function(){
		if(window.__exampleAnimateTimeout){
			clearTimeout(window.__exampleAnimateTimeout);
			window.__exampleAnimateTimeout = null;
		}
			
		//window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
	});
};