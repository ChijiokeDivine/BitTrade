(function ($) {

  "use strict";

  /* ---------------------------------------------

  Navigation menu

  --------------------------------------------- */

  // dropdown for mobile
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  }


  $(window).load(function () {

  })



  /* ---------------------------------------------
  INFINITE SLIDER
  --------------------------------------------- */
  var ZuzuTextSlider = function ($scope, $) {
    var wrapper = $scope.find(".zuzu-text-slider");

    if (wrapper.length === 0)
      return;
    var settings = wrapper.data('settings');

    wrapper.slick({

      rtl: settings['slider_rtl'],
      infinite: true,
      slidesToShow: settings['per_coulmn'],
      slidesToScroll: settings['slide_scroll'],
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 10000,
      cssEase: 'linear',
      pauseOnHover: true,
      adaptiveHeight: true,
      responsive: [{
        breakpoint: 1600,
        settings: {
          slidesToShow: settings['per_coulmn'],
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: settings['per_coulmn_tablet'],
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: settings['per_coulmn_mobile'],
          slidesToScroll: 1,
        },
      },
      ],
    });
  }

  // start zuzu slider one
  var ZuzuSliderOne = function ($scope, $) {
    var wrapper = $scope.find(".zuzu-slider-one");
    if (wrapper.length === 0)
      return;
    var settings = wrapper.data('settings');
    wrapper.slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: settings['arrows'],
      autoplay: settings['autoplay'],
      dots: false,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }

      ]
    });

  }

  // start nft slider one
  var ZuzuNftSlider = function ($scope, $) {
    var wrapper = $scope.find(".zuzu-nft-slider");
    if (wrapper.length === 0)
      return;
    var settings = wrapper.data('settings');
    wrapper.slick({
      rtl: settings['slider_rtl'],
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: settings['autoplay'],
      autoplaySpeed: 0,
      speed: 10000,
      cssEase: 'linear',
      pauseOnHover: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });

  }



  // card slider
  var ZuzuTestimonialInfiniteSlider = function ($scope, $) {
  var wrapper = $scope.find(".zuzu-testimonial-infinite-slider");
  if (wrapper.length === 0)
      return;
    var settings = wrapper.data('settings');
      wrapper.slick({
      infinite: true,
      slidesToShow: 3, 
      slidesToScroll: 1,
      arrows: false,
      dots: settings['dots'],
      autoplay: settings['autoplay'],
      autoplaySpeed: 2000,
      centerMode: true,
      centerPadding: '250px',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: '220px',
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '150px',
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            centerPadding: '100px',
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            centerPadding: '0px',
          }
        }
    
      ]
    });

  }



  // start zuzu slider one
  var ZuzuCardSlider = function ($scope, $) {
    var wrapper = $scope.find(".zuzu-card-slider");
    if (wrapper.length === 0)
      return;
    var settings = wrapper.data('settings');
    wrapper.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: settings['arrows'],
      autoplay: settings['autoplay'],
      dots: false,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
    });

  }








  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction("frontend/element_ready/Zuzu_Text_Slider.default", ZuzuTextSlider);
    elementorFrontend.hooks.addAction("frontend/element_ready/zuzu_project_card.default", ZuzuSliderOne);
    elementorFrontend.hooks.addAction("frontend/element_ready/zuzu_nft_slider.default", ZuzuNftSlider);
    elementorFrontend.hooks.addAction("frontend/element_ready/Zuzu_Testimonial_Infinite_Slider.default", ZuzuTestimonialInfiniteSlider);
    elementorFrontend.hooks.addAction("frontend/element_ready/Zuzu_card_slider.default", ZuzuCardSlider);
  });

})(jQuery);