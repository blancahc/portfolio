'use strict';

//Define functions
  //When the user clicks on mobile navigation
  function createMobileNav() {
  $('.mobile-toggle').click(function(){
    $('.navigation').slideToggle();
  });
  }

//when the page loads...
$(document).ready(function () {
  createMobileNav();
  $('#projects').hide();
});

//When the user clicks on project
$('#view-projects').on('click', function () {
  $('main').hide();
  $('#projects').show();
});

//When the user clicks on 'Blanca Hernandez' it takes them back to the landing page
$('#blanca').on('click', function () {
  $('main').hide();
  $('#landing-page').show();
});