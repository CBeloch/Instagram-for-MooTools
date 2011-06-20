Instagram for MooTools
===========

Instagram is a growing platform to quickly share pictures with your friends.  
With this classes you can connect to nearly all Instagram API Endpoints just by using JavaScript.  

Polaroid Camera Icon by [Petter Myhr](http://pettermyhr.deviantart.com/)

![Screenshot](http://dev.cbeloch.de/Instagram/logo.png)

How to use
----------

At first, you have to register a new client on the [developer page of Instagram](http://instagram.com/developer/manage/).  
This library just requires the *client id* and if you use services that require authentication, also the *callback url*.

You have to use the **Instagram.Base.js** first. It's the base for all other files.  
Use the other files as required.  
If you just want to use the Media and Tags Endpoints, your code would look like

	#HTML
	<script src="js/Instagram.Base.js"></script>
	<script src="js/Instagram.Media.js"></script>
	<script src="js/Instagram.Tags.js"></script>

### Initialize

> **Syntax:**

	#JS
	var myInstagram = new Instagram(options);

> **Arguments:**  
> 1. options - (*options*) see below

> **Options:**

> * client\_id - (*string*) Your applications client\_id
> * redirect\_uri - (*string*) The defined callback URL of your application
> * scope - (*array*) A list of scopes your application require - [Take a look at the Instagram API description](http://instagram.com/developer/auth/#scope)

### Media

[Media API Endpoints Documentation](http://instagram.com/developer/endpoints/media/)

#### getMedia

> **Syntax:**

	#JS
	myInstagram.getMedia(media_id);

> **Arguments:**  
> 1. media\_id

> **Events**
> mediaInformation

#### searchMedia

> **Syntax:**

	#JS
	myInstagram.searchMedia(lat, lng, distance, min_time, max_time);

> **Arguments:**
> 1. lat - Latitude of the center search coordinate. If used, lng is required.
> 2. lng - Longitude of the center search coordinate. If used, lat is required.
> 3. distance - Default is 1km (distance=1000), max distance is 5km
> 4. min\_time - A unix timestamp. All media returned will be taken later than this timestamp.
> 5. max\_time - A unix timestamp. All media returned will be taken earlier than this timestamp.

> **Events**
> mediaData

#### getPopularMedia

> **Syntax:**

	#JS
	myInstagram.getPopularMedia();

> **Events**
> mediaData

### Tags

[Tag API Endpoints Documentation](http://instagram.com/developer/endpoints/tags/)

#### getTagInformation

> **Syntax:**

	#JS
	myInstagram.getTagInformation(tag);

> **Arguments:**  
> 1. tag - (*string*)

> **Events**
> tagInformation

#### getTagMedia

> **Syntax:**

	#JS
	myInstagram.getTagMedia(tag);

> **Arguments:**  
> 1. tag - (*string*)

> **Events**
> mediaData

#### searchTag

> **Syntax:**

	#JS
	myInstagram.searchTag(input);

> **Arguments:**  
> 1. input - (*string*)

> **Events**
> tagSearch

### User

This Endpoints require and authorized user.  
[User API Endpoints Documentation](http://instagram.com/developer/endpoints/user/)

#### getUser
#### getFeed
#### getUserMedia
#### searchTag
#### getLikedMedia
#### searchUser


### Relationship

This Endpoints require and authorized user.  
[Relationship API Endpoints Documentation](http://instagram.com/developer/endpoints/relationships/)

#### getFollows
#### getFollowedBy
#### getRequestedBy
#### getRelationship

### Comment

This Endpoints require and authorized user.  
[Comment API Endpoints Documentation](http://instagram.com/developer/endpoints/comments/)

#### getComments

### Like

This Endpoints require and authorized user.  
[Like API Endpoints Documentation](http://instagram.com/developer/endpoints/likes/)

#### getLikes

### Location

[Location API Endpoints Documentation](http://instagram.com/developer/endpoints/locations/)

#### getLocation
#### getLocationMedia
#### searchLocation