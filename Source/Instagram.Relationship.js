/*
---

script: Instagram.Relationship.js
version: 0.6
description: Retrieve user data like follows, followed-by, requested-by and the authorized users relationship to another user
license: MIT-style
authors:
- Christopher Beloch

requires:
- Instagram.Base

provides:
- Instagram.getFollows
- Instagram.getFollowedBy
- Instagram.getRequestedBy
- Instagram.getRelationship

...
*/

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