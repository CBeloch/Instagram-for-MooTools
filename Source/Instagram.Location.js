/*
---

script: Instagram.Location.js
version: 0.6
description: Retrieve location information, media at a specific location and search for locations
license: MIT-style
authors:
- Christopher Beloch

requires:
- Instagram.Base

provides:
- Instagram.getLocation
- Instagram.getLocationMedia
- Instagram.searchLocation

...
*/

Instagram.implement({
	getLocation: function(location_id) {
		this.request('locations/' + location_id, 'locationData');
	},
	
	getLocationMedia: function(location_id, min_time, max_time) {
		var parameter = new Object();

		if(min_time) { parameter.min_timestamp = min_time; }
		if(max_time) { parameter.max_timestamp = max_time; }

		this.request('locations/' + location_id + '/media/recent', 'mediaData', parameter);
	},
	
	searchLocation: function(lat, lng, foursquare_id, distance) {
		var parameter = new Object();

		if(lat) { parameter.lat = lat; }
		if(lng) { parameter.lng = lng; }
		if(foursquare_id) { parameter.foursquare_id = foursquare_id; }
		if(distance) { parameter.distance = distance; }

		this.request('locations/search', 'locationSearch', parameter);
	}
});