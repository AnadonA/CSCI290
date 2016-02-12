/*	NOTES REGARDING TRAINING REQUIREMENTS

	How can I handle the different TYPES of requirements. For example: some can 
	be fulfilled by a myriad of different classes (think - GenEd). Others 
	require a very specific class type. Still yet - others require only a 
	specific number of credits from a class set.									*/

/*	----------------------------------------------------------------------------
	The Training Requirement
	This prototype is used to extend the Training Requirement object. These 
	extensions include the ability to add and/or remove parent and children 
	Training Requirements.
	----------------------------------------------------------------------------	*/
trainingRequirement 	= function(doc){
	_.extend(this, doc);
};

trainingRequirement.prototype 	= {
	/*	------------------------------------------------------------------------
		The Training Requirement constructor. Required for the extensions to be
		applied.
		------------------------------------------------------------------------	*/
	constructor: 		trainingRequirement,

	/*	------------------------------------------------------------------------
		Attempts to add the provided RequirementID as a parent of the current 
		Training Requirement.
		------------------------------------------------------------------------	*/
	registerParent: 		function(pRequirementID){
		//	If the parent array doesn't currently exist, then create it and fill
		//	it with the requested Training Requirement ID.
		if (this.parents == undefined)
			trainingRequirements.update({_id: this._id}, {$set: {parents: [pRequirementID]}});

		//	If the parent array already exists, then test for the existence of
		//	the requested Requirement within the array. If it does not yet exist
		//	then push it into the array and save the resulting value.
		else
			if (this.parents.indexOf(pRequirementID) < 0){
				var parents	= this.parents;
				parents.push(pRequirementID);
				trainingRequirements.update({_id: this._id}, {$set: {parents: parents}});
			}
	},

	/*	------------------------------------------------------------------------
		Attempts to remove the provided RequirementID from the parent array of 
		the curren Training Requirement.
		------------------------------------------------------------------------	*/
	removeParent: 		function(pRequirementID){

		//	If the parents array exists then test for the existence of the
		//	provided RequirementID. If it does exist, then splice it out and 
		//	save the resulting array.
		if (this.parents){
			var index 	= this.parents.indexOf(pRequirementID);

			if (index >= 0){
				var parents 	= this.parents;
				parents.splice(index, 1);
				trainingRequirements.update({_id: this._id}, {$set: {parents: parents}});
			}
		}
	},

	/*	------------------------------------------------------------------------
		Attempts to add the provided RequirementID as a child of the current 
		Training Requirement.
		------------------------------------------------------------------------	*/
	registerChild: 		function(pRequirementID){
		//	If the child array doesn't currently exist, then create it and fill 
		//	it with the provided RequestedID.
		if (this.children == undefined)
			trainingRequirements.update({_id: this._id}, {$set: {children: [pRequirementID]}});

		//	If the child array already exists, then test it for the existence of
		//	the requested RequirementID. If it does not yet exist, then push it
		//	into the array and save the result.
		else
			if (this.children.indexOf(pRequirementID) < 0){
				var children	= this.children;
				children.push(pRequirementID);
				trainingRequirements.update({_id: this._id}, {$set: {children: children}});
			}
	},

	/*	------------------------------------------------------------------------
		Attempts to remove the provided RequirementID from the child array of 
		the current Training Requirement Object.
		------------------------------------------------------------------------	*/
	removeChild: 		function(pRequirementID){
		//	If the child array exists then test for the existence of the 
		//	provided Requirement ID. If it does exist, then splice it out and 
		//	save the resulting array.
		if (this.children){
			var index 	= this.children.indexOf(pRequirementID);

			if (index >= 0){
				var children	= this.children;
				children.splice(index, 1);
				trainingRequirements.update({_id: this._id}, {$set: {children: children}});
			}
		}
	},

/*	----------------------------------------------------------------------------
	Attempts to add the provided keyword into the keyword array. Of course, this
	is dependant on the provided Keyword not already existing in the array.
	----------------------------------------------------------------------------	*/
	registerKeyword: 	function(pKeyword){
		//	Perform case correction and trim the provided keyword value
		pKeyword	= pKeyword.trim().toLowerCase();
		
		//	If the keyword array doesn't exist in the current Training 
		//	Requirement then create it and add the provided Keyword.
		if (this.keywords == undefined){
			trainingRequirements.update({_id: this._id}, {$set: {keywords: [pKeyword]}});
		}

		//	If the keyword array already exists within the current Training
		//	Requirement then retrieve it and test it for the provided Keyword.
		//	If it does not yet exist within the array, then push it into it and
		//	store the result.
		else
			if (this.keywords.indexOf(pKeyword) < 0){
				var keywords 	= this.keywords;
				keywords.push(pKeyword);

				trainingRequirements.update({_id: this._id}, {$set: {keywords: [pKeyword]}});
			}
		
	},
};

/*	----------------------------------------------------------------------------
	Create the TrainingRequirements collection and apply the TrainingRequirement
	extension. This will ensure that all TrainingRequirement objects include the
	registerParent, registerChild, removeParent and removeChild functions.
	----------------------------------------------------------------------------	*/
trainingRequirements	= new Mongo.Collection("training.requirements", {
	transform: 	function(doc){
		return new trainingRequirement(doc);
	}
});
trainingKeywords		= new Mongo.Collection("training.keywords");
trainingPackageCollection		= new Mongo.Collection("training.packages");
trainingEventCollection			= new Mongo.Collection("trainingEvents");

/*	----------------------------------------------------------------------------
	DATABASE SCHEMA DEFINITIONS
	----------------------------------------------------------------------------

--------------------------------------------------------------------------------
trainingRequirementCollection

01 - _id				love1		- The unique document identifier of the training 
 								requirement (i.e. PRIMARY_KEY)
02 - name						- A short title of the training requirement. This
 								will be the text that is displayed when space is
 								limited.
03 - description				- The long text that describes the training 
 								requirement in detail.
04 - minimumScore				- The minimum score that is required to achieve
 								before the training activity is considered 
 								complete.
05 - requiredQty				- The number of passing scores required before 
 								this training requirement is considered complete
 								This is especially necessary for performance 
 								based competencies (i.e. perform job x in the 
 								field).
06 - prerequisites				- An array of traininRequirement document _id's.
								These are the trainingRequirements that are 
								required to be completed BEFORE this training
								requirement is made available to the user.
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
trainingPackageCollection

01 - _id						- The unique document identifier of the training
								package (i.e. PRIMARY_KEY)
02 - name						-
*/