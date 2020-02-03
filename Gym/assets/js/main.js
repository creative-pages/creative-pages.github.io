$(document).ready(function(){
    // top to start
    $topOffset=350;
    $('.top_to i').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },800);
    });
    $navOffset=$('header').offset().top;
     $(window).scroll(function(){
        $scrolling=$(this).scrollTop();
        if($scrolling > $navOffset){
            $('.menu').addClass('top_fix');
        } else {
            $('.menu').removeClass('top_fix');
        }
        if($scrolling > $topOffset){
            $('.top_to i').fadeIn(500);
        }
         else{
             $('.top_to i').fadeOut(500);
         }
    });
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
    // slick slider for testimonial
    $('.testimonial_slider').slick({
      arrows: false,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 800,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
        });

    // gallery fencybox
    $('[data-fancybox="gallery"]').fancybox({
      loop: true,
      buttons: [
      "zoom",
      //"share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close"
    ],
    });
    // couter up work delivery
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // isotop for class
    $('.class_main').isotope({
      // options
      itemSelector: '.class_item',
      layoutMode: 'fitRows'
    });
    $("ul li.link").click(function(){
      $("ul li").removeClass("class_active");
      $(this).addClass("class_active");

      var selector = $(this).attr("data-filter");
      $(".class_main").isotope({
        filter: selector
      });
      return false
    });
    // slick slider class
    $('.class_slider').slick({
      arrows: true,
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 800,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
        });

}(jQuery));