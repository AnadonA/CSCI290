/*	----------------------------------------------------------------------------
	Pushes the provided text to the Console Log IF the LogEnabled variable is 
	currently set to true. Otherwise, it does nothing.
	----------------------------------------------------------------------------	*/
LogEnabled	= true;
clnLogToConsole 	= function(pText){
	//	If the log is enabled, then stream to it.
	if (LogEnabled)
		console.log(pText);
}

/*	----------------------------------------------------------------------------
	Tests for a valid connection to an active MeteorJS application. If one exists, 
	it returns true. Otherwise it returns false. This function can be used to 
	inform the user of a change in connection status.
	----------------------------------------------------------------------------	*/
ServerConnected			= function(){
	return (Meteor.status().status == "connected");
}

/*	----------------------------------------------------------------------------
	Tests the currently provided user ID against the provided application 
	administrator array. Returns true if the user ID is included in the list and 
	false otherwise.
	----------------------------------------------------------------------------	*/
clnIsAdministrator		= function(pApplication, pUserID){
	pApplication 		= pApplication.trim().toLowerCase();
	return Meteor.users.findOne({_id: pUserID}).profile.adm.indexOf(pApplication);
}

/*	----------------------------------------------------------------------------
	Looks for the provided TagText in the provided TagArray. If the TagText is 
	present its index within the array is returned. Otherwise, a value of -1 is
	returned.
	----------------------------------------------------------------------------	*/
LookForTag		= function(pTagText, pTagArray){
	//	Default the index value for a 'not-present' tag
	var index	= -1;

	//	Iterate through the entire TagArray and look for matches to the 
	for (tag = 0; tag < pTagArray.length; tag++){
		if (pTagArray[tag].text == pTagText){
			index	= tag;
			//break;
		}
	}

	return index;
}

/*	----------------------------------------------------------------------------
	Tests the provided tagArray for the provided tagText (each are case corrected
	and trimmed). If the tagText exists within the array, then it is removed and
	the resulting array is returned.
	----------------------------------------------------------------------------	*/
RemoveTag		= function(tagArray, tagText){
	//	Correct the tagText and each of the tagArray values
	tagText		= tagText.trim().toLowerCase();
	for (i = 0; i < tagArray.length; i++)
		tagArray[i].text 	= tagArray[i].text.trim().toLowerCase();

	//	Attempt to locate the tagText within the tagArray
	var index 	= -1;
	for (i = 0; i < tagArray.length; i++)
		if (tagArray[i].text == tagText){
			index	= i;

			//	A match was found; Save processing power by discontinuing iteration
			break;
		}

	//	Remove the array index from the tagArray using the .splice() command IF 
	//	a match was located.
	if (index >= 0){
		tagArray.splice(index, 1);
	}

	//	Return the index value. This is done to inform the caller of the actions
	//	that were performed. If >= 0 is returned, then the tag was removed. If a
	//	negative value is returned (-1) then no tag was removed.
	return index;
}

/*	----------------------------------------------------------------------------
	Tests the provided tagArray for the provided tagText (each are case corrected
	and trimmed). If the tagText exists within the array it is removed and the 
	resulting array is returned.
	----------------------------------------------------------------------------	*/
InsertTags 		= function(pTagArray, pTagText){
	//	Case correct each of the TagArray and the TagText values. This is done to
	//	ensure all tests are performed against similar values.
	pTagText	= pTagText.trim().toLowerCase();
	for (i = 0; i < pTagArray.length; i++)
		pTagArray[i].text 	= pTagArray[i].text.trim().toLowerCase();

	//	Ensure the provided tagText is not empty. If it is then discontinue 
	//	processing.
	if (pTagText.length < 2)
		return;

	//	Split the tagText into subparts based on the pre-defined split chars.
	var tags01	= pTagText.split(",");

	//	Iterate through each of the resulting comma splits and split it again
	//	using ';'. 
	for (i = 0; i < tags01.length; i++){

		//	Trim the current
		tags01[i] 	= tags01[i].trim();

		var tags02	= tags01[i].split(";");
		for (j = 0; j < tags02.length; j++){

			tags02[j]	= tags02[j].trim();

			if (LookForTag(tags02[j], pTagArray) < 0)
				pTagArray.push({text: tags02[j]});
		}
	}
}