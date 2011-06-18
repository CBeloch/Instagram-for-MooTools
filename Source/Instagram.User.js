Instagram.implement({
	getUser: function(user_id) {
		user_id = user_id || 'self';
		
		this.request('users/' + user_id + '/', 'singeUser', null, true);
	}
});