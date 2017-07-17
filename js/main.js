// on load fade function
$(function() {
    $('body').removeClass('fade-out');
});

// navigation
$(document).ready(function(){
    $('.btn-menu').click(function(){
        $('.nav-overlay').fadeToggle('slow');
        $('.site-title').fadeToggle();
        $('nav').toggleClass('nav');
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});

$('.nav-overlay').click(function(){
    // open = false;
});


