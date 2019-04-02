'use strict';
function createMobileNav() {
$('.mobile-toggle').click(function(){
  $('.navigation').slideToggle();
});
}


function runAll() {
  createMobileNav();
}

$(function() {
  runAll();
});