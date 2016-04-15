selectable = 	{
	ModeText: 			".allowMulti",
	SelectionText: 		".selections",

	SetSelectionMode: 		function(pArea, pAllowMultiSelect = false){
		if (!pArea)
			return false;

		var area 	= pArea + selectable.ModeText;
		Session.set(area, pAllowMultiSelect);

		if (!pAllowMultiSelect)
			selectable.ResetSelections(pArea);
	},

	GetSelectionMode: 		function (pArea){
		if (!pArea)
			return false;

		var area 	= pArea + selectable.ModeText;
		var mode 	= Session.get(area);

		return (mode !== undefined) ? mode: false;
	},

	ResetSelections: 		function(pArea){
		if (!pArea)
			return false;

		var area 	= pArea + selectable.SelectionText;
		Session.set(area, undefined);
	},

	CheckSelections: 			function(pArea, pElementID){
		if (!pArea || !pElementID)
			return "notSelected";

		var area 		= pArea + selectable.SelectionText;
		var selections 	= Session.get(area);

		if (selections && selections.indexOf(pElementID) >= 0)
			return "selected";

		return "notSelected";
	},

	ProcessSelections: 		function(pArea, pElementID){
		if (!pArea || ! pElementID)
			return false;

		var area 		= pArea + selectable.SelectionText;
		var allowMulti 	= selectable.GetSelectionMode(pArea);
		var selections	= Session.get(area);

		if (selections){

			var isSelected	= (selections.indexOf(pElementID) >= 0);

			if (allowMulti){
				if (isSelected)
					selections.splice(selections.indexOf(pElementID), 1);
				else 
					selections.push(pElementID);
			}
			else{
				if (isSelected)
					selections 	= [];
				else 
					selections 	= [pElementID];
			}
		}
		else {
			selections 	= [pElementID];
		}

		Session.set(area, selections);
	},

	GetSelections: 		function(pArea){
		if (!pArea)
			return false;

		var area 		= pArea + selectable.SelectionText;
		var selections 	= Session.get(area);

		return selections ? selections : false;
	}
}