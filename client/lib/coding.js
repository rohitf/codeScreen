$(function(){
	console.log("The ID " + Session.get("_id"));

});

Template.coding.events({
    'keyup, change textarea': function() {
    	var qa = $('#edit').val();
        var notes = $('#notestext').val();
        var feedback = $('#feedbacktext').val();

        Meteor.call('updateCode', Session.get("code"), Session.get("_id"), qa, notes, feedback, function(error, result){
            if(error)
                console.log("hmm");
        });
    }
});

Template.coding.helpers({
    'type': function() {
    	return Session.get("who");
	}
});