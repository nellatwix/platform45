//animation on intro-button
$('.introduction-section__arrow').click(function() {
  $(this).toggleClass("active");
  $('.my-world-today-section').toggleClass("active");
  var h = window.innerHeight;
    $('html,body').animate({
        scrollTop: $(".my-world-today-section.active").offset().top + h},
        'slow');
});





