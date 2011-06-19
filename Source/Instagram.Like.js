Instagram.implement({
	/*
		requires scope 'likes'
	*/

	getLikes: function(media_id) {
		/*
			Note: You get likes width all Media Data like Tag-Media oder User Feeds.
			This gets a full list of likes for a media.
		*/
		this.request('media/' + media_id + '/likes', 'likeData', null, true);
	}
	
	// ! TODO - add like, unlike
});