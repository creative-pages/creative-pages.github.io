$(document).ready(function($){
    // fixed menu and top to start
    $topOffset=350;
    $('.top_to i').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },800);
    });
    $navOffset=$('header').offset().top;
    $(window).scroll(function(){
        $scrolling=$(this).scrollTop();
        var width = $(window).width();
          if (width > 981){
            if($scrolling > $navOffset){
                $('.nav-link').addClass('p-fixed');
            }
            else{
                $('.nav-link').removeClass('p-fixed');
            }
          }
        if($scrolling > $navOffset){
                $('#menu').addClass('bg-fixed');
            }
            else{
                $('#menu').removeClass('bg-fixed');
            }
        if($scrolling > $topOffset){
            $('.top_to i').fadeIn(500);
        }
         else{
             $('.top_to i').fadeOut(500);
         }
    });

    // fixed to top end

	// WOW Js Active
	new WOW().init();

	// ---- Active Banner Carousel
    $(".banner_slider").owlCarousel({
    	items:1,
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1500,
        autoplayHoverPause:true,
        smartSpeed: 1500,
        nav:true,
        navText:["<i class='fal fa-angle-left' aria-hidden='true'></i>", "<i class='fal fa-angle-right' aria-hidden='true'></i>"],
        dots:true,
        center:false,
        rtl:false,
        responsiveClass:true,
        responsive:{
            0:{
                nav:false,
                dots:false,
            },
            575.98:{
                dots:true,
                nav:false,
            },
            767.98:{
                nav:true,
                dots:true,
            }
        }
	});

    // ---- Active testimonial Carousel
    $(".test_slider").owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:4000,
        autoplaySpeed:1500,
        autoplayHoverPause:true,
        smartSpeed: 1500,
        nav:false,
        navText:["<i class='fal fa-angle-left' aria-hidden='true'></i>", "<i class='fal fa-angle-right' aria-hidden='true'></i>"],
        dots:true,
        center:false,
        rtl:false,
    });

    // ---- Active Magnific Popup
    $('.popup-link').magnificPopup({type:'image'});
    $('.popup-youtube').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: true
    });

}(jQuery));