/*
---

script: Instagram.Comment.js
version: 0.6
description: Retrieve comments for a media
license: MIT-style
authors:
- Christopher Beloch

requires:
- Instagram.Base

provides: [Instagram.getComments]

...
*/

Instagram.implement({
	/*
		requires scope 'comments'
	*/

	getComments: function(media_id) {
		/*
			Note: You get comments width all Media Data like Tag-Media oder User Feeds.
			This gets a full list of comments for a media
		*/
		this.request('media/' + media_id + '/comments', 'commentData', null, true);
	}
	
	// ! TODO - add createComment, deleteComment
});