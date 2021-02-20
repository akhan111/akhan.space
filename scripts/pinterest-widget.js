// In order for Pins to display properly, you will need the Masonry plugin by David DeSandro. 

// Your Pinterest username
var pinUser = 'khanimalia';

// Number of Pins you wish to display
var numPins = '50';

// ----------------------------------

var $pinProfile = $('.pin-user-profile');
var $pinFeed = $('.pinterest-feed');
var $pinLink = $('.pinterest-link');

$.ajax({
dataType: 'jsonp',
type: 'GET',
url: 'https://widgets.pinterest.com/v3/pidgets/users/'+ pinUser +'/pins'
}).done(function(response) {
var userinfo = response.data.user;
var profileImg = userinfo.image_small_url;
var displayName = userinfo.full_name; 
var userBio = userinfo.about;  
  
 
var pins = response.data.pins;
var html = '';
for (var i = 0; i < numPins; i++) {
var imageUrl = pins[i].images['237x'].url;
var pinUrl = pins[i].id;
  // var pinUrl = pins[i].images['564x'].url;
    
html += '<div class="pinterest-feed-pin"><a href="https://pinterest.com/pin/'+ pinUrl +'" target="_blank" rel="nofollow" </a><img src="'+ imageUrl +'" alt="Pin Feed"></div>';
}   

var userLink = userinfo.profile_url;  
  
$pinProfile.html('<div class="pin-user-profile-image"><img src="'+ profileImg +'" alt="Pinterest Profile Image"></div><div class="pin-user-details"><span class="pin-user-name">'+ displayName +'</span><span class="pin-user-bio">'+ userBio +'</span></div>'); 

// $pinLink.html('<a href="'+ userLink +'" rel="nofollow" target="_blank"><i class="fab fa-pinterest" style="display:inline-block; margin-right:5px; font-size:20px; line-height:20px; vertical-align:text-top;""></i><span id="link-cursor" style="display:inline-block; line-height:20px; font-weight: 400; font-size:1rem; vertical-align:text-top;">@'+ pinUser +' on Pinterest</span></a>');  
  
$pinFeed.html(html);
}).fail(function() {
console.log('Uh oh');
});

$(window).load(function () {
                setTimeout(function() {
        $('.pinterest-feed').masonry({
            itemSelector: '.pinterest-feed-pin',
          percentPosition: true
        });
                  
(function($) {$('.pin-user-profile-image').find('img').each(function(b,a){a=$(a);a.attr({src:a.attr('src').replace(/30x30/,'60x60')});a.attr('width',60);a.attr('height',60)});}(jQuery));                  
                    }, 1000); 
 });
