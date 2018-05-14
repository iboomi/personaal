var $contact = $('#contact');
$contact.waypoint(function(){
  $('.email').addClass('js-email-animate'),
  $('.phone').addClass('js-phone-animate'),
  $('.github').addClass('js-github-animate'),
  $('.facebook').addClass('js-facebook-animate')

},{offset: '50%'});
