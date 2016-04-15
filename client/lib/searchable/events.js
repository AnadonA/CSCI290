Template.searchable.events({
	"keyup .searchableKeyword": 		function(event){
		var keyword 	= event.target.value;
		var location	= Iron.Location.get().path.replace(/\//g, ".");

		if (keyword.length > 0)
			searchable.ProcessKeywords(location, event.target.value);
		else{
			searchable.ResetKeywords(location);
		}
	}
});