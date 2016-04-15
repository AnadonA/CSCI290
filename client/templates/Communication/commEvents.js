
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
	
	$(".thetitle").val(finalvar.title);
	$(".thename").val(finalvar.name);
	$(".startdate").val(finalvar.posted);
	$(".enddate").val(finalvar.expires);
	$(".type").val(finalvar.type);
	$(".info").val(finalvar.information);
},

'click .updateannoucement': function(event, template){
	var selected = Session.get('selectedAnnoucement');
	 announcementslist.update({_id: new Mongo.ObjectID(selected)},
		{$set:{
		title: $('.thetitle').val(),
		name: $('.thename').val(),		
		posted: $('.startdate').val(),
		expires: $('.enddate').val(),
		type: $('.type').val(),
		information: $('.info').val()
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

