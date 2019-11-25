$(document).ready(function($){
    // fixed menu and top to start
    $topOffset=350;
    $('.top_to i').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },800);
    });
    $navOffset=$('#header_main').offset().top;
     $(window).scroll(function(){
        $scrolling=$(this).scrollTop();
        if($scrolling > $navOffset){
            $('#header_main').addClass('fixed');
            $('#banner').addClass('margin_prob');
        }
        else{
            $('#header_main').removeClass('fixed');
            $('#banner').removeClass('margin_prob');
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
    $(".b_slider").owlCarousel({
    	items:1,
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:6000,
        autoplaySpeed:1500,
        autoplayHoverPause:true,
        smartSpeed: 1500,
        nav:true,
        navText:["<i class='fas fa-angle-left' aria-hidden='true'></i>", "<i class='fas fa-angle-right' aria-hidden='true'></i>"],
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

    // ---- Active clients Carousel
    $(".clients_slider").owlCarousel({
        loop:true,
        margin:15,
        autoplay:false,
        autoplayTimeout:4000,
        autoplaySpeed:1500,
        autoplayHoverPause:true,
        smartSpeed: 1500,
        nav:false,
        navText:["<i class='fas fa-angle-left' aria-hidden='true'></i>", "<i class='fas fa-angle-right' aria-hidden='true'></i>"],
        dots:false,
        center:false,
        rtl:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots:true,
            },
            767.98:{
                items:2,
            },
        }
    });

    // ---- Active team Carousel
    $(".team_slider").owlCarousel({
        loop:true,
        margin:15,
        autoplay:false,
        autoplayTimeout:4000,
        autoplaySpeed:1500,
        autoplayHoverPause:true,
        smartSpeed: 1500,
        nav:false,
        navText:["<i class='fas fa-angle-left' aria-hidden='true'></i>", "<i class='fas fa-angle-right' aria-hidden='true'></i>"],
        dots:false,
        center:false,
        rtl:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots:true,
            },
            767.98:{
                items:2,
            },
        }
    });

}(jQuery));