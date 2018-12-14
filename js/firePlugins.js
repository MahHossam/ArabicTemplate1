$(document).ready(function () {
    new WOW().init(); //wow


    //owl carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
        rtl:true
    });
    
    //filteriz
    var filterizd = $('.filtr-container').filterizr({
           //options object
        });

    //smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]',{
        offset:80
    });

    

}); //End Document ready