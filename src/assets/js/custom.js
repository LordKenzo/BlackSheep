/*=============== NAVBAR TRANSPARENT TO SOLID  ===============*/
$(document).ready( function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 300) {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });
});

/*=============== CLOSE MOBILE NAV ON CLICK ===============*/

$(document).ready(function(){
  $(document).click(function(event) {
    const clickover = $(event.target);
    const opened = $('.navbar-collapse').hasClass('show');
    if (opened && !clickover.hasClass('navbar-toggler')) {
      $('.navbar-toggler').click();
    }
  });
});