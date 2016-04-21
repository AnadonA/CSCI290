
/*
If you really want to try this, first open the web console ([ctrl]+[shift]+[j] on chrome) 
run them from there...
*/

Template.CommunicationManageAnnouncements.events({

'click .resettest': function(){
	document.getElementById("createform").reset();
	
},
	
'click .resettest2': function(){
	document.getElementById("editform").reset();
},

'click .createannoucement': function(){
	event.preventDefault();
	
	announcementslist.insert({
		title: $('.thetitle').val(),
		name: $('.thename').val(),		
		posted: $('.startdate').val(),
		expires: $('.enddate').val(),
		type: $('.type').val(),
		information: $('.info').val(),
	
	

	});
},

'click .well': function(event, template){
	var annid = this._id._str;
	Session.set('selectedAnnoucement', annid);
	var selectedAnnouce = Session.get('selectedAnnoucement');
	var finalvar = announcementslist.findOne({_id: new Mongo.ObjectID(selectedAnnouce)});
	
	$("#edittitle").val(finalvar.title);
	$("#editname").val(finalvar.name);
	$("#editstartdate").val(finalvar.posted);
	$("#editenddate").val(finalvar.expires);
	$("#edittype").val(finalvar.type);
	$("#editinfo").val(finalvar.information);
},

'click .updateannoucement': function(event, template){
	event.preventDefault();
	var selected = Session.get('selectedAnnoucement');
	 announcementslist.update({_id: new Mongo.ObjectID(selected)},
		{$set:{
		title: $("#edittitle").val(),
		name: $("#editname").val(),		
		posted: $("#editstartdate").val(),
		expires: $("#editenddate").val(),
		type: $("#edittype").val(),
		information: $("#editinfo").val()
		}},
	);
	Session.set("selectedAnnoucement", undefined);


},

'click .removebtn': function(event){
	
	var selected = Session.get('selectedAnnoucement');
	announcementslist.remove({_id: new Mongo.ObjectID(selected)});
	Session.set("selectedAnnoucement", undefined);
	
	},

'click .sendbtn': function(){
	Meteor.call('sendEmail', 'dlopez42@student.yosemite.edu', 'Hello', 'This is a test');
}
});

