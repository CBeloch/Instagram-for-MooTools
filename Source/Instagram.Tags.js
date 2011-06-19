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