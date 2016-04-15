searchable	= {
	ModeText: 		".searchMode",
	SearchText: 	".locatedObjects",

	SetSearchMode: 			function(pArea, pAllowMulti = true){
		if (!pArea)
			return false;

		var location	= Iron.Location.get().path.replace(/\//g, ".") + searchable.SearchText;

		var area 	= pArea + searchable.ModeText;
		Session.set(area, pAllowMulti);
		return true;
	},

	ProcessKeywords: 		function(pArea, pKeywordText){
		if (!pArea || !pKeywordText)
			return false;

		var location	= Iron.Location.get().path.replace(/\//g, ".") + searchable.SearchText;

		var area 		= pArea + searchable.SearchText;
		var keywords 	= "";

		Session.set(area, pKeywordText);
		return true;
	},

	GetKeywords: 			function(pArea){

		var location	= Iron.Location.get().path.replace(/\//g, ".") + searchable.SearchText;

		return Session.get(location);
	},

	ResetKeywords: 			function(){
		var location 	= Iron.Location.get().path.replace(/\//g, ".") + searchable.SearchText;
		Session.set (location, undefined);
	}
}