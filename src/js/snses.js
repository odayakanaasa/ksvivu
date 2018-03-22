function socialbutton(){

var thelabel = "";
  $('.btn-social').each(function(){
    thelabel = $(this).attr('data-label');
    $(this).addClass('btn-' + thelabel);
  });
$('.btn-social-action').on('click',function(){
  var thelabel = $(this).attr('data-label'),socialNw = "",socialAc = "";
  if(thelabel == "line-share"){
    socialNw = "LINE";
    socialAc = "share";
  } else if(thelabel == "tweet"){
    socialNw = "Twitter";
    socialAc = "Tweet";
  } else if(thelabel == "fbshare"){
    socialNw = "Facebook";
    socialAc = "share";
  } else if(thelabel == "gplusshare"){
    socialNw = "Google+";
    socialAc = "share";
  } else if(thelabel == "hatena"){
    socialNw = "HatenaBookmark";
    socialAc = "Bookmark";
  } else if(thelabel == "youtube"){
    socialNw = "HatenaBookmark";
    socialAc = "Bookmark";
  } else if(thelabel == "twitter-follow"){
    socialNw = "Twitter";
    socialAc = "Follow";
  } else if(thelabel == "reg-push"){
    socialNw = "Pushnate";
    socialAc = "Registrate";
  } else {
    socialNw = "Unknown";
    socialAc = "Unknown";
  }
  ga('send', 'social', socialNw, socialAc, 'https://suiranfes.com/', {
    nonInteraction: false
  });
});

$('.btn-social-link').on('click',function(){
  ga('send', 'event', 'Social', 'Link', $(this).attr('data-label'), {
    nonInteraction: false
  });
});

window.gacb_gplusone = function(){
  ga('send', 'social', 'Google+', '+1', 'https://suiranfes.com/', {
    nonInteraction: false
  });
    if (data['state'] == 'on') {void(0);}

}

window.fbAsyncInit = function() {
  FB.Event.subscribe('edge.create',function(response){
    ga('send', 'social', 'Facebook', 'like', 'https://suiranfes.com/', {
      nonInteraction: false
    });
  });
};
}

$(function(){
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/ja_JP/sdk.js', function(){
    FB.init({
      appId      : '689195224565280',
      status     : true,
      xfbml      : true,
      version    : 'v2.8'
    });
    $('#loginbutton,#feedbutton').removeAttr('disabled');
  });
});

$(document).ready(function(){
  socialbutton();
});

$(window).on('load',function(){
  $('#after_fbshare').html('<div class="fb-like" data-href="https://2017.suiranfes.com/" data-layout="button_count" data-action="like" data-show-faces="true" data-share="false"></div>');
  FB.XFBML.parse();
});
