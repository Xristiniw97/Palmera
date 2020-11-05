const nextIcon = '<img src="img/right-arrow.svg" alt="right">';
const prevIcon = '<img src="img/left-arrow.svg" alt="left" >';

(function($){

    var isMobile = window.matchMedia("only screen and (max-width: 767px)");

    if (!isMobile.matches) {
        
        var $item = $('.carousel .carousel-item'); 
        var $wHeight = $(window).height();
        $item.eq(0).addClass('active');
        $item.height($wHeight); 
        $item.addClass('full-screen');
        
        $('.carousel img').each(function() {
          var $src = $(this).attr('src');
          var $color = $(this).attr('data-color');
          $(this).parent().css({
            'background-image' : 'url(' + $src + ')',
            'background-color' : $color
          });
          $(this).remove();
        });
        
        $(window).on('resize', function (){
          $wHeight = $(window).height();
          $item.height($wHeight);
        });
    }
    //carousel
    $('.carousel').carousel({
        interval: 6000,
        pause: "false"
      }); 
              
    // STAY OWL
    $(".stay-owl").owlCarousel({
      items:2,
      autoplay:false,
      autoplaySpeed:1000,
      margin:30,
      nav: true,
      navText: [prevIcon,nextIcon],
      dots: false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true,
              dots: false 
          },
          600:{
              items:1,
              nav:true,
              dots: false 
          },
          1400:{
              items:2,
              nav:true,
              dots: false,
              loop:false
          }
      }
    });

    // STAY OWL
    $(".stay-owl2").owlCarousel({
        items:2,
        autoplay:false,
        autoplaySpeed:1000,
        margin:30,
        nav: true,
        navText: [prevIcon,nextIcon],
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                dots: false 
            },
            600:{
                items:1,
                nav:true,
                dots: false 
            },
            1000:{
                items:2,
                nav:true,
                dots: false,
                loop:false
            }
        }
    });

    // REVIEWS OWL 
    $(".reviews-owl").owlCarousel({
      navigation : true, 
      items : 1
     });

     //AWARDS OWL
     $('.awards-owl').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                400:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
		
})(jQuery);

function closeMenu(){
    document.getElementById("navbar").style.height = "0%";
}
function openMenu(){
    document.getElementById("navbar").style.height = "100%";
}