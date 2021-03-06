/*
---

script: Instagram.User.js
version: 0.6
description: Retrieve user data and get the feed or liked media of the authorized user. Retrieve the recent photos of a user and search for new user.
license: MIT-style
authors:
- Christopher Beloch

requires:
- Instagram.Base

provides:
- Instagram.getUser
- Instagram.getFeed
- Instagram.getUserMedia
- Instagram.getLikedMedia
- Instagram.searchUser

...
*/

Instagram.implement({
	getUser: function(user_id) {
		user_id = user_id || 'self';
		
		this.request('users/' + user_id, 'singleUser', null, true);
	},
	
	getFeed: function(count) {
		var parameter = new Object();
		if(count) { parameter.count = count; }

		this.request('users/self/feed', 'userFeed', parameter, true);
	},
	
	getUserMedia: function(user_id, count, min_time, max_time) {
		user_id = user_id || 'self';

		var parameter = new Object();
		if(count) { parameter.count = count; }
		if(min_time) { parameter.min_timestamp = min_time; }
		if(max_time) { parameter.max_timestamp = max_time; }

		this.request('users/' + user_id + '/media/recent', 'mediaData', parameter, true);
	},
	
	getLikedMedia: function(count) {
		var parameter = new Object();
		if(count) { parameter.count = count; }

		this.request('users/self/media/liked', 'mediaData', parameter, true);
	},
	
	searchUser: function(input) {
		if(input.length < 3) {
			return;
		}
		this.request('users/search', 'userSearch', {'q': input});
	}
});