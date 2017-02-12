$(document).ready(function($) {

    'use strict';

    /*=======================================
       Nivo Slider 
    ======================================= */
    $('#mainslider').nivoSlider({
        directionNav: false,
        animSpeed: 500,
        effect: 'random',
        slices: 18,
        pauseTime: 10000,
        pauseOnHover: false,
        controlNav: true,
        prevText: '<i class="flaticon-left-arrow-angle"></i>',
        nextText: '<i class="flaticon-right-arrow-angle"></i>'
    });
	
	/*=======================================
        Menu Modal
    =======================================*/
    if($(".menuButon").length > 0)
    {
        $("#openMenu").animatedModal({
			modalTarget:'menuModal',
			animatedIn:'bounceInDown',
			animatedOut:'bounceOutUp',
			color:'#3498db'  
        });
    }
 
    /*=======================================
          Load More                
    ======================================= */
		$(document).on('click', '#test2', function() {
           $("#demo2").slideToggle(500);
           $("#demo3").slideToggle(500);
        });
		
    /*=======================================
         TESTIMONIAL CAROUSE                 
    ======================================= */
    $('#testimonial').owlCarousel({
        loop: true,
        center: true,
        stagePadding: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            767: {
                items: 3,
                dots: false,
                nav: true,
                navText: [" <i class='arrow_carrot-left'></i> ", " <i class='arrow_carrot-right'></i> "]
            }
        }
    });


    /*=======================================
         PRELOADER                     
    ======================================= */
    $(window).load(function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });

    /*==========================================
         Skill BAR
    ============================================*/
    $('.skillbar').each(function() {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });

    /* =======================================
    		WOW ANIMATION
    ======================================= */
    var wow = new WOW({
        mobile: false
    });
    wow.init();




    /*=======================================
        Scroll Top
    =======================================*/
    $("#scrollup").on('click', function() {
        $('html,body').animate({
            'scrollTop': '0'
        }, 4000);
        return false;
    });


    /*=======================
			PRODUCT MODAL 
		=========================*/
    $('[data-remodal-id=productModal]').remodal({});


});