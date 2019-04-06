'use strict';

//Define functions
//when the page loads...

// $('#view-bio').click((e) => {
//   e.preventDefault();
//   $('body,html').animate({
//     scrollTop: 0
//   }, 2000);
//   return false;
// });

$('#view-about-me').click((e) => {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $("#about-me").offset().top
  }, 2000);
});

$('#view-projects').click((e) => {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $("#projects").offset().top
  }, 2000);
});

$('#view-contact').click((e) => {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $("#contact").offset().top
  }, 2001);
});
