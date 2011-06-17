
var Instagram = new Class({

	Implements: [Options, Events],
	
	options: {
		'client_id': null,
		'redirect_uri': null
	},
	
	initialize: function(options){
		this.setOptions(options);
		this.apiEndpoint = "https://api.instagram.com/v1/";	
		this.accessToken = null;	
	},
	
	getAuthURL: function(){
		return "https://instagram.com/oauth/authorize/?client_id=" + this.options.client_id + "&redirect_uri=" + this.options.redirect_uri + "&response_type=token&scope=relationships";

	},
	
	setAccessToken: function(token){
		this.accessToken = token;	
	},
	
	loadDataByTag: function(tag){
		var self = this;
		
		var req = new Request.JSONP({
			url: self.apiEndpoint + 'tags/' + tag + '/media/recent/?client_id=' + self.options.client_id,
			onFailure: function(){
				self.fireEvent('error', 'Connection to Instagram API failed');
			},
			onComplete: function(data){
				if(data.meta.code != 200){
					self.fireEvent('error', data.meta.error_message);
					return;
				}
				if(data.data.length <= 0){
					self.fireEvent('error', 'No images found');
					return;
				}
				
				self.fireEvent('imageData', data);
			}
		});
		req.send();
	},
	
	loadUser: function(user_id) {
		var self = this;
		
		var req = new Request.JSONP({
			url: self.apiEndpoint + 'users/' + user_id + '/?access_token=' + self.accessToken,
			onFailure: function(){
				self.fireEvent('error', 'Connection to Instagram API failed');
			},
			onComplete: function(data){
				self.fireEvent('userData', data);
			}
		});
		req.send();
	},
	
	loadUserFollows: function(user_id) {
		var following = null;
		var self = this;
		
		var userReq = 'self';
		
		if(user_id) {
			userReq = user_id;
		}
		
		var req = new Request.JSONP({
			url: self.apiEndpoint + 'users/' + userReq + '/follows/?access_token=' + self.accessToken,
			onFailure: function(){
				self.fireEvent('error', 'Connection to Instagram API failed');
			},
			onComplete: function(data){
				self.fireEvent('userData', data);

			}
		});
		req.send();
	}
});	