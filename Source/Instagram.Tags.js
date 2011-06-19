/*
---

script: Instagram.Tags.js
version: 0.6
description: Retrieve tag information like the media count and the recent media for a tag. You can also search for tags.
license: MIT-style
authors:
- Christopher Beloch

requires:
- Instagram.Base

provides:
- Instagram.getTagInformation
- Instagram.getTagMedia
- Instagram.searchTag

...
*/

Instagram.implement({
	getTagInformation: function(tag){
		this.request('tags/' + tag, 'tagInformation');
	},
	
	getTagMedia: function(tag){
		this.request('tags/' + tag + '/media/recent', 'mediaData');
	},
	
	searchTag: function(input){
		if(input.length < 3) {
			return;
		}
		this.request('tags/search', 'tagSearch', {'q': input});
	}
});