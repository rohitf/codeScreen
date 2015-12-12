Template.home.events({
    'keypress input': function(e) {
    	if(e.which == 13){
    		e.preventDefault();
    		$('#create_button').trigger('click');
    	}
    },
    'click #create_button' : function() {
    	if ($('#interview_name').val() == "" || $('#interview_role').val() == "")
    		alert("Please fill in the required (*) fields - candidate name and role")
    	else{
	    	var name = $('#interview_name').val() || "Technical Interview";
	    	var role = $('#interview_role').val() || "JAVA Developer";
	    	var datetime = $('#interview_datetime').val() || new Date();
	    	Meteor.call('createInterview', name, role, datetime, function(error, result){
		    	if(error)
		    		alert("Error");
			    	else
			    	{
		    		var urlInterviewer = window.location.href + "chocolate/" + result;
		    		Session.set("url",urlInterviewer);
		    		$('#interview_link_interviewer').val(urlInterviewer).css("font-size","1em").css('background-color','tomato');;
		    		$('#interview_link_candidate').val(window.location.href + result).css("font-size","1em").css('background-color','tomato').select();
		    		$('#create_button').text("Go to Interview").attr("id","redirect_button");
		    		// $('input').val(url).css("font-size", "1em").select();
		    		// $('a').text("Copy and Go");
		    		// $('a').attr("id","redirect_button");
		  			}
	  		});
	    }
	},
	'click #redirect_button' : function(){
		window.location.href = Session.get('url');
	}
});