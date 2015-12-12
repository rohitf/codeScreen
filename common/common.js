Interviews = new Mongo.Collection('interviews');

if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });
}

if (Meteor.isClient) {
}

Meteor.methods({
    'createInterview': function(name, role, datetime){
    	var interview = {};
    	interview.name = name;
      interview.role = role;
      interview.qa = "";
      interview.code = "";
      interview.notes = "";
      interview.feedback = "";
      interview.datetime = datetime;
    	return Interviews.insert(interview);
	},
	'updateCode': function(newCode, id, newQa, newNotes, newFeedback){
    return Interviews.update({ _id: id},
            {
                $set: {
                  code: newCode,
                  qa: newQa,
                  notes: newNotes,
                  feedback: newFeedback
                }
            },
        	{upsert: false }
    	)
	}
}); 