/*

ProgramTemplate
{
	_id: 			MONGO.ObjectID,
	name: 			Computer Science AS,
	type: 			Associates of Science Degree,
	program: 		[
		{
			_id: 			MONGO.ObjectID,
			year: 			2013,
			requirements: 	[
				{
					_id: 			MONGO.ObjectID,
					name: 			MJC Guidance and Activities,
					type: 			Group,
					requirements: 	[
						{
							_id: 			MONGO.ObjectID,
							name: 			"Guidance",
							type: 			"course",
							value: 			1,
							courseList: 	[
								{courseName: AG-115},
								{courseName: GUIDE-109},
								{courseName: GUIDE-110},
								{courseName: GUIDE-111},
								{courseName: GUIDE-112},
								{courseName: GUIDE-116},
								{courseName: GUIDE-120},
								{courseName: STSK-78}
							]
						},
						{
							_id: 			MONGO.ObjectID,
							name: 			"Activities",
							type: 			"credits",
							value: 			2,
							courseList: 	[
								{courseKeyword: Activities2013}
							]
						}
					]
				}
			]
		},
		{
			_id: 			MONGO.ObjectID,
			year: 			2016,
			requirements: 	[
				{
					_id: 			MONGO.ObjectID,
					name: 			MJC Guidance and Activities,
					type: 			Group,
					requirements: 	[
						{
							_id: 			MONGO.ObjectID,
							name: 			"Guidance",
							type: 			"course",
							value: 			1,
							courseList: 	[
								{courseName: AG-115},
								{courseName: GUIDE-109},
								{courseName: GUIDE-110},
								{courseName: GUIDE-111},
								{courseName: GUIDE-112},
								{courseName: GUIDE-116},
								{courseName: GUIDE-120},
								{courseName: STSK-78}
							]
						}
						{
							_id: 			MONGO.ObjectID,
							name: 			"Activities",
							type: 			"credits",
							value: 			2,
							courseList: 	[
								{courseKeyword: Activities2016}
							]
						}
					]
				},
				{
					_id: 			MONGO.ObjectID,
					name: 			MJC Competency Requirements,
					type: 			Group,
					requirements: 	[
						{
							_id: 			MONGO.ObjectID,
							name: 			Natural Science,
							type: 			Course,
							value: 			1,
							courseList: 	[
								{courseName: AG-376},
								{coursename: ANAT-125},
								{courseName: ANSC-200}, 
								{courseName: ANTHR-101}, 
								{courseName: ANTHR-105}, 
								{courseName: AP-50}, 
								{courseName: AP-150}, 
								{courseName: ASTRO-141}, 
								{courseName: ASTRO-160}, 
								{courseName: MBIO-50},
								{courseName: MBIO-101}, 
								{courseName: MBIO-111}, 
								{courseName: MBIO-114}, 
								{courseName: MBIO-115}, 
								{courseName: MBIO-116}, 
								{courseName: MBIO-140}, 
								{courseName: MBIO-145}, 
								{courseName: BOT-101}, 
								{courseName: BOT-110}, 
								{courseName: CHEM-101}, 
								{courseName: CHEM-102}, 
								{courseName: CHEM-112}, 
								{courseName: CHEM-113}, 
								{courseName: CHEM-142}, 
								{courseName: CHEM-143}, 
								{courseName: CHEM-144},  
								{courseName: CHEM-150},  
								{courseName: CHEM-164},  
								{courseName: EASCI-161},   
								{courseName: EASCI-162},  
							]
						}
					]
				}
			]
		}
	]
}
*/

Programs	= {
	createTemplate: 	function(){
		var retVar 	= {
			code: 	0,
			text: 	"Entered function",
			value:	undefined
		};

		if (!Session.get("training.courses.programTemplate")){
			var newTemplate 	= {
				name: 		"New Program Template",
				reqs: 		[]
			};
			
			Session.set("training.courses.programTempalte", newTemplate);
			retVar.text 	= "Training Program template created.";
		}
		else{
			retVar.code 	= -1;
			retVar.text 	= "A training program template already exists in session memory. Avoiding template overwrite.";
		}

		return retVar;
	}
}