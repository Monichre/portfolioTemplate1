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

    // infinite slider only works with 3+ slides, so if less than 3 we need to duplicate
function duplicateSlides(slider, slides) {
  if(slides.length < 3) {
    // Duplicate slider content
    slider.append(slider.html());
    // Re count slides
    var slidesRecount = jQuery('.slider .slider__slide');
    // Recursive function until more than 3 slides
    duplicateSlides(slider, slidesRecount);
  } else {
    // Remove active class if any already added
    slides.removeClass('slider__slide--active');
    // Only add active class to first slide once recursion has finished
    jQuery(slides[0]).addClass('slider__slide--active');
  }
}


    /*=======================
            TECH SKILLS/EDUCATION
                    SLIDER
        =========================*/

  var $sliderContainers = jQuery('.slider');
  var $containerBg = jQuery('.skills');

  $sliderContainers.each(function() {
    // Cache this
    var $sliderContainer = jQuery(this);
    // Get the inner slider for duplicate slides function
    var $sliderInner = $sliderContainer.find('.slider__inner');
    // Get all the slides
    var $slides = $sliderContainer.find('.slider__slide');
    // Duplicate slides
    duplicateSlides($sliderInner, $slides);
    // Get the background colour of the active slide
    var bg = $sliderContainer.find('.slider__slide--active').children('.slider__slide__content').data('background');
    // Lighten using tinycolor


    // Move the last slide in front of the first
    var $first = $slides.filter(':first');
    var $last = $slides.filter(':last');
    $first.before($last);

    $sliderContainer.on('click', '.controls button', function() {
      $slides.addClass('slider__slide--animate');
      var $clicked = jQuery(this);
      var $activeSlide = $sliderContainer.find('.slider__slide--active');
      $first = $sliderContainer.find('.slider__slide:first');
      $last = $sliderContainer.find('.slider__slide:last');
      if($clicked.hasClass('next')) {
        // Get the background colour of the next active slide
        var nextBg = jQuery('.slider__slide--active').next().children('.slider__slide__content').data('background');


        // Add active class to next slide, remove from this slide
        $activeSlide.removeClass('slider__slide--active').next().addClass('slider__slide--active');
        // Move first slide to last place
        $last.after($first);
      } else if($clicked.hasClass('previous')) {
        // Get the background colour of the previous active slide
        var prevBg = jQuery('.slider__slide--active').prev().children('.slider__slide__content').data('background');
    
        $activeSlide.removeClass('slider__slide--active').prev().addClass('slider__slide--active');
        // Move last slide to first place
        $first.before($last);
      }
    });
    $(window).resize(function(){
      $slides.removeClass('slider__slide--animate');
    });
  });



});
