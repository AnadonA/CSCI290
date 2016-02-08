trainingRequirementCollection	= new Mongo.Collection("trainingRequirements");
trainingPackageCollection		= new Mongo.Collection("trainingPackages");
trainingEventCollection			= new Mongo.Collection("trainingEvents");

/*	----------------------------------------------------------------------------
	DATABASE SCHEMA DEFINITIONS
	----------------------------------------------------------------------------

--------------------------------------------------------------------------------
trainingRequirementCollection

01 - _id						- The unique document identifier of the training 
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