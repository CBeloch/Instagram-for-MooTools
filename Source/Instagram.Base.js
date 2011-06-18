
var Instagram = new Class({

	Implements: [Options, Events],
	
	options: {
		'client_id': null,
		'redirect_uri': null,
		'scope': ['basic', 'relationships']
	},
	
	initialize: function(options){
		this.setOptions(options);
		this.apiEndpoint = "https://api.instagram.com/v1/";	
		this.accessToken = null;	
	},
	
	request: function(endpoint, dataEvents, reqParameter, accessRequired){
		reqParameter = reqParameter || new Object();		
		
		if(!accessRequired) {
			reqParameter.client_id = this.options.client_id;
		}
		else {
			if(!this.accessToken) {
				this.fireEvent('error', 'Please authorize on Instagram');
				return;
			}
			reqParameter.access_token = this.accessToken;
		}
		
		var self = this;
		
		var req = new Request.JSONP({
			url: self.apiEndpoint + endpoint + '?' + Object.toQueryString(reqParameter),
			onFailure: function(){
				self.fireEvent('error', 'Connection to Instagram API failed');
			},
			onComplete: function(data){
				if(data.meta.code != 200){
					self.fireEvent('error', data.meta.error_message);
					return;
				}
				
				if(typeOf(dataEvents) == 'array') {
					dataEvents.each(function(item){
						this.fireEvent(item, data)
					}, self);
				}
				else {
					self.fireEvent(dataEvents, data);
				}
			}
		});
		req.send();
	},
	
	getAuthURL: function(){
		return "https://instagram.com/oauth/authorize/?client_id=" + this.options.client_id + "&redirect_uri=" + this.options.redirect_uri + "&response_type=token&scope=relationships";

	},
	
	setAccessToken: function(token){
		this.accessToken = token;	
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