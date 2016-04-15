Template.trainingProgramsDetails.helpers({
	programDetails: 			function(){
		var DemoProgram	= {
			name: 		"MJC | Computer Science | AS (MCMPS_AS412000)",
			desc: 		"Description for Demo Program",
			programs: 	[
				{
					year: 			2016,
					requirements: 	[
						{
							name: 			"1: MJC Guidance and Activities",
							desc: 			"Complete both sub-requirements",
							type: 			"package",
							courses: 		undefined,
							requirements: 	[
								{
									name: 			"A: Guidance",
									desc: 			"Complete 1 of the listed courses: ",
									type: 			"or",
									requirements: 	undefined,
									courses: 	[
										{
											_id: 	new Mongo.ObjectID(),
											name: 	"AG-115",
										},
										{
											_id: 	new Mongo.ObjectID(),
											name: 	"GUIDE-109"
										},
										{
											_id: 	new Mongo.ObjectID(),
											name: 	"GUIDE-110"
										},
										{
											_id: 	new Mongo.ObjectID(),
											name: 	"GUIDE-111"
										},
										{
											_id: 	new Mongo.ObjectID(),
											name: 	"GUIDE-112"
										},
										{
											_id: 	new Mongo.ObjectID(),
											name: 	"GUIDE-116"
										},
										{
											_id: 	new Mongo.ObjectID(),
											name: 	"GUIDE-120"
										},
										{
											_id: 	new Mongo.ObjectID(),
											name: 	"STSK-78"
										}
									]
								},
								{
									name: 			"B: Activities",
									desc: 			"Complete 2 credits from any Activities courses listed in the MJC Catalog.",
									type: 			"or",
									requirements: 	undefined,
									courses: 	[
										{
											_id: 	new Mongo.ObjectID(),
											name: 	"Activities Course"
										}
									]
								}
							]
						}
					]
				}
			]
		};
		return DemoProgram;
	}
});

Template.trainingProgramsDetailsSub.helpers({
	panelType: 				function(){
		var x 	= Math.round(Math.random() * 100);

		if (x >= 50)
			return "success";
		return "default";
	},

	fixName: 				function(pName){
		var name 	= pName.toLowerCase();
		name 		= name.replace(/@|#|$|&|-|:| /gi, '_');

		return name;
	},

	listCourses: 			function(pCourseArray){
		if (pCourseArray){
			var courseList 	= "";

			for (var i = 0; i < pCourseArray.length; i++){
				courseList += pCourseArray[i].name;
				if (i < pCourseArray.length - 1)
					courseList += ", ";
			}

			return courseList;
		}
		return "N/A";
	}
});