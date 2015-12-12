Router.route('/', {
    template: 'home'
});


Router.route('/:type?/:_id', {
    data: function(){
    	var interview = Interviews.findOne({_id: this.params._id});
    	Session.set("_id", this.params._id);
    	subs = Meteor.subscribe('interview', Session.get('_id'));
	  	var type = this.params.type == "chocolate" ? true : false;
	  	Session.set("who", type);
	  	return {
	    	person: interview,
	    	who: type
	  	};
	},
	template: 'coding',
	notFoundTemplate: 'notFound'
});