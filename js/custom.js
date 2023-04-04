
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".navbar").addClass("sticky-nav");
        } else {
            $(".navbar").removeClass("sticky-nav");
        }
    });

    // BACKSTRETCH SLIDESHOW
    $('#section_1').backstretch([
      "../images/slide/pexels-pixabay-433200.jpg",
      "../images/slide/pexels-eric-mufasa-1350789.jpg",
      "../images/slide/pexels-freemockupsorg-775219.jpg",
      "../images/slide/pexels-pixabay-276528.jpg"
    ],  {duration: 2000, fade: 750});
    
  })(window.jQuery);


