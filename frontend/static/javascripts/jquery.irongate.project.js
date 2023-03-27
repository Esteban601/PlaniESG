function thumbNails(){

    $('.project-hero-items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.project-hero-thumbs-nav'
    });
    $('.project-hero-thumbs-nav').slick({
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      // appendArrows: $('.project-hero-thumbs-items'),
      prevArrow: $('.project-hero-thumbs-prev'),
      nextArrow: $('.project-hero-thumbs-next'),
      asNavFor: '.project-hero-items',
      focusOnSelect: true,
      // mobileFirst: true,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    });

    // $('.project-hero-thumbs-nav').slick({
    //   infinite: false,
    //   slidesToShow: 3,
    //   slidesToScroll: 3,
    //   appendArrows: $('.project-hero-thumbs-items'),
    //   mobileFirst: true,
    //   responsive: [
    //     {
    //       breakpoint: 1070,
    //       settings: {
    //         slidesToShow: 4,
    //         slidesToScroll: 4
    //       }
    //     }
    //   ]
    // });
    
  }

  $(document).ready(function(){

    thumbNails();

    $('.project-hero-items').on('swipe', function(event, slick, direction){
      $('.project-hero-thumbs-nav').slick('slickPause');
    });

    $('.project-hero-thumbs-nav').on('swipe', function(event, slick, direction){
      $('.project-hero-thumbs-nav').slick('slickPause');
    });

    $('.project-hero-thumbs-nav .slick-slide').on('click', function(){
      $('.project-hero-thumbs-nav').slick('slickPause');
    });

    $('.slick-arrow').on('click', function(){
      $('.project-hero-thumbs-nav').slick('slickPause');
    });
    
  });

  $(window).on('resize', function() { 
    $('.project-hero-items').slick('reinit');
    $('.project-hero-thumbs-nav').slick('reinit');
  });