Instagram.implement({
	/*
		requires scope 'relationships'
	*/
	
	getFollows: function(user_id) {
		user_id = user_id || 'self';
		
		this.request('users/' + user_id + '/follows', 'userData', null, true);
	},
	
	getFollowedBy: function(user_id) {
		user_id = user_id || 'self';
		
		this.request('users/' + user_id + '/followed-by', 'userData', null, true);
	},
	
	getRequestedBy: function() {
		this.request('users/self/requested-by', 'userData', null, true);
	},
	
	getRelationship: function(user_id) {
		this.request('users/' + user_id + '/relationship', 'relationshipData', null, true);
	}
	
	// ! TODO - add setRelationship
});