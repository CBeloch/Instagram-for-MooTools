Instagram.implement({
	getMedia: function(media_id) {
		this.request('media/' + media_id, 'mediaInformation');
	},
	
	searchMedia: function(lat, lng, distance, min_time, max_time) {
		var parameter = new Object();
		parameter.lat = lat;
		parameter.lng = lng;
		if(distance) { parameter.distance = distance; }
		if(min_time) { parameter.min_timestamp = min_time; }
		if(max_time) { parameter.max_timestamp = max_time; }
		
		this.request('media/search', 'mediaData', parameter);
	},
	
	getPopularMedia: function() {
		this.request('media/popular', 'mediaData');
	}
});