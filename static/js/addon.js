(function($) {

    "use strict";

    /* ---------------------------------------------

    Navigation menu

    --------------------------------------------- */

    // dropdown for mobile




    $(document).ready(function() {
        $("#page").append("<div class='courser-animaion'></div>");
        // Input Show Password
        $(".toggle-password").on("click", function(e) {
            var input = $(this).parent().find("input");

            if (input.attr("type") == "password") {
                input.attr("type", "text");
                $(this).removeClass("fa-eye-slash").addClass("fa-eye");
            } else {
                input.attr("type", "password");
                $(this).removeClass("fa-eye").addClass("fa-eye-slash");
            }
            });
    });




    $(window).load(function() {

    })


    // accordion script starts
    var fdAddonsAccordion = function($scope, $) {
            var accordionTitle = $scope.find('.mas-addons-accordion-title');

            var accmin = $scope.find('.mas-addons-accordion-single-item');

            accmin.each(function() {
                if ($(this).hasClass('yes')) {
                    $(this).addClass('wraper-active');
                }
            });

            accordionTitle.each(function() {
                if ($(this).hasClass('active-default')) {
                    $(this).addClass('active');
                    $(this).next('.mas-addons-accordion-content').slideDown(300);
                }
            });

            // Remove multiple click event for nested accordion
            accordionTitle.unbind('click');

            //$accordionWrapper.children('.mas-addons-accordion-content').first().show();
            accordionTitle.click(function(e) {
                e.preventDefault();

                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(this).next().slideUp(400);
                    $(this).parent().removeClass('wraper-active');

                } else {
                    $(this).parent().parent().find('.mas-addons-accordion-title').removeClass('active');

                    accmin.removeClass('wraper-active');

                    $(this).parent('.yes').removeClass('wraper-active');

                    $(this).parent().parent().find('.mas-addons-accordion-content').slideUp(300);

                    $(this).parent().addClass('wraper-active');

                    $(this).toggleClass('active');
                    $(this).next().slideToggle(400);

                }
            });
        }
        // accordion script ends


    var MasGlobal = function($scope, $) {



        if ($scope.hasClass('mas-addons-sticky-yes')) {
            var current_widget = $scope;
            current_widget.wrap('<div class="sticky-wrapper"></div>');
            var headerHeight = $(current_widget).parent('.sticky-wrapper').height(),
                stickyWrapper = $(current_widget).parent('.sticky-wrapper');
            stickyWrapper.css('height', headerHeight + "px")
            window.onscroll = function() {
                scrollFunction()
            };

            function scrollFunction() {

                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    if ($scope.hasClass('mas-addons-sticky-yes')) {
                        stickyWrapper.addClass("is-sticky");
                        console.log(stickyWrapper);
                    }
                } else {
                    if ($scope.hasClass('mas-addons-sticky-yes')) {
                        stickyWrapper.removeClass("is-sticky");
                    }
                }
                if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                    if ($scope.hasClass('mas-addons-sticky-yes')) {
                        $scope.addClass("reveal-sticky");
                    }
                } else {
                    if ($scope.hasClass('mas-addons-sticky-yes')) {
                        $scope.removeClass("reveal-sticky");
                    }
                }

            }

        }
    }

    var MasductCategories = function() {
        if ($.fn.isotope) {
            var $gridMas = $('.product-categories-wrap.masonry');

            $gridMas.isotope({
                itemSelector: '.mas-addons-product-cat-wrap',
                percentPosition: true,
                layoutMode: 'packery',
            })

            $gridMas.imagesLoaded().progress(function() {
                $gridMas.isotope()
            });
        }
    }

    var MAS_Addons_Blog = function($scope) {
        var wrapper = $scope.find('.masonry')
        if ($.fn.isotope) {

            wrapper.isotope({
                itemSelector: '.fastland-blog-wraper>.masonry>div',
                percentPosition: true,
                layoutMode: 'packery',
            })

        }
    }

    var ShadeJobLoop = function() {
        if ($.fn.owlCarousel) {
            $('.mas-addons-job-carousel').owlCarousel({
                margin: 30,
                responsiveClass: true,
                navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    768: {
                        items: 2,
                        nav: false
                    },
                    1000: {
                        items: 4,
                        nav: true,
                        loop: false
                    }
                }
            })
        }
    }





    //portfolio gallery js start
    var MAS_Addons_Portfolio_Gallery_Js = function() {

        if ($.fn.isotope) {

            $(window).load(function() {
                var $gridMas = $('.mas-addons-pf-gallery-wrap.layout-mode-masonry');

                $gridMas.isotope({
                    itemSelector: '.mas-addons-pf-gallery-wrap .mas-addons-portfolio-item-wrap',
                    percentPosition: true,
                    layoutMode: 'packery',
                }).resize();

                $gridMas.imagesLoaded().progress(function() {
                    $gridMas.isotope()
                });
            })
        }

    }

    //portfolio js start
    var MAS_Addons_Portfolio_Js = function() {
        if ($.fn.isotope) {

            var $gridMas = $('.mas-addons-portfolio-wrap.layout-mode-masonry');
            var $grid = $('.mas-addons-portfolio-wrap.layout-mode-normal');

            $grid.isotope({
                itemSelector: '.mas-addons-portfolio-item-wrap',
                percentPosition: true,
                layoutMode: 'fitRows',
            }).resize()

            $grid.imagesLoaded().progress(function() {
                $grid.isotope('layout')
            }).resize();

            $gridMas.isotope({
                itemSelector: '.mas-addons-portfolio-item-wrap',
                percentPosition: true,
                layoutMode: 'packery',
            })

            $gridMas.imagesLoaded().progress(function() {
                $gridMas.isotope('layout')
            });

            $grid.isotope().resize();
            $gridMas.isotope().resize();

            $(".pf-isotope-nav li").on('click', function() {
                $(".pf-isotope-nav li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $gridMas.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: false,
                    }
                });

                var selector = $(this).attr("data-filter");
                $grid.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: false,
                    }
                });


            });

        }

        // comment load more button click event
        $('.mas-addons-pf-loadmore-btn').on('click', function() {
            var button = $(this);

            // decrease the current comment page value
            var dpaged = button.data('paged'),
                total_pages = button.data('total-page'),
                nonce = button.data('referrar'),
                ajaxurl = button.data('url');

            dpaged++;
            // console.log(foio_portfolio_js_datas);
            $.ajax({
                url: ajaxurl, // AJAX handler, declared before
                dataType: 'html',
                data: {
                    'action': 'mas_addons_loadmore_callback', // wp_ajax_cloadmore
                    // 'post_id': foio_portfolio_js_datas.parent_post_id, // the current post
                    'paged': dpaged, // current comment page
                    'folio_nonce': nonce,
                    'portfolio_settings': button.data('portfolio-settings'),
                },
                type: 'POST',
                beforeSend: function(xhr) {
                    button.text('Loading...'); // preloader here
                },
                success: function(data) {
                    if (data) {
                        $('.mas-addons-portfolio-wrap').append(data);
                        $('.mas-addons-portfolio-wrap').isotope('reloadItems').isotope()
                        button.text('More projects');
                        button.data('paged', dpaged);
                        // if the last page, remove the button
                        if (total_pages == dpaged)
                            button.remove();
                    } else {
                        button.remove();
                    }
                }
            });
            return false;
        });

    }


    var MAS_Addons_Testimonail = function($scope, $) {
        //adding popup video
        if ($.fn.magnificPopup) {
            $('.mas-addons-popup-youtube').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
            });
        }


        var postwrapper = $scope.find(".mas-addons--testimonial");

        if (postwrapper.length === 0)
            return;

        var settings = postwrapper.data('settings');

        /*--------------------------------------------------------------
        mas-addons slider js
        --------------------------------------------------------------*/
        var postwrapper = $('.mas-addons--testimonial'),
            rtl = $('body').hasClass('rtl') ? true : false;

        postwrapper.owlCarousel({
            rtl: rtl,
            loop: settings['loop'],
            autoplay: settings['autoplay'],
            nav: settings['nav'],
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplaytimeout: settings['autoplaytimeout'],
            items: 1,
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" style="transform: rotate(180deg);"><path d="M1.16669 14H26.25" stroke="#fff" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.0834 5.83334L26.25 14L18.0834 22.1667" stroke="#fff" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M1.16669 14H26.25" stroke="#fff" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.0834 5.83334L26.25 14L18.0834 22.1667" stroke="#fff" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
            ],
        });

    }

    var MAS_Addons_Back_To_Top = function($scope, $) {
        //adding popup video

        $('.mas-addons-popup-youtube').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
        });



        /*--------------------------------------------------------------
        mas-addons slider js
        --------------------------------------------------------------*/
        var postwrapper = $('.mas-addons--testimonial');

        jQuery(".mas-addons-back-to-top-wraper").click(function() {
            jQuery("html, body").animate({
                scrollTop: 0
            }, 1000);
        });

        function stickyHeader($class) {
            jQuery(window).on('scroll', function() {
                var headerHeight = 600;
                if (jQuery(window).scrollTop() >= headerHeight) {
                    jQuery('.mas-addons-back-to-top-wraper .mas-addons-icon').addClass('sticky-active');
                } else {
                    jQuery('.mas-addons-back-to-top-wraper .mas-addons-icon').removeClass('sticky-active');
                }
            });
        }

        stickyHeader('.mas-addons-back-to-top-wraper');

    }



    function makeTimer() {

        var mas_addonsDate = $(".mas-addons-countdown#date").data("date");
        var endTime = new Date(mas_addonsDate);
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }

        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);

    }

    var MAS_Addons_CountDown = function() {
        setInterval(function() {
            makeTimer();
        }, 1000);
    }

    // progress bar script starts

    function animatedProgressbar(id, type, value, strokeColor, trailColor, strokeWidth, strokeTrailWidth) {
        var triggerClass = '.mas-addons-progress-bar-' + id;
        if ('function' === typeof ldBar) {
            if ('line' === type) {
                new ldBar(triggerClass, {
                    'type': 'stroke',
                    'path': 'M0 10L100 10',
                    'aspect-ratio': 'none',
                    'stroke': strokeColor,
                    'stroke-trail': trailColor,
                    'stroke-width': strokeWidth,
                    'stroke-trail-width': strokeTrailWidth
                }).set(value);
            }
            if ('line-bubble' === type) {
                new ldBar(triggerClass, {
                    'type': 'stroke',
                    'path': 'M0 10L100 10',
                    'aspect-ratio': 'none',
                    'stroke': strokeColor,
                    'stroke-trail': trailColor,
                    'stroke-width': strokeWidth,
                    'stroke-trail-width': strokeTrailWidth
                }).set(value);
                $($('.mas-addons-progress-bar-' + id).find('.ldBar-label')).animate({
                    left: value + '%'
                }, 1000, 'swing');
            }
            if ('circle' === type) {
                new ldBar(triggerClass, {
                    'type': 'stroke',
                    'path': 'M50 10A40 40 0 0 1 50 90A40 40 0 0 1 50 10',
                    'stroke-dir': 'normal',
                    'stroke': strokeColor,
                    'stroke-trail': trailColor,
                    'stroke-width': strokeWidth,
                    'stroke-trail-width': strokeTrailWidth
                }).set(value);
            }
            if ('fan' === type) {
                new ldBar(triggerClass, {
                    'type': 'stroke',
                    'path': 'M10 90A40 40 0 0 1 90 90',
                    'stroke': strokeColor,
                    'stroke-trail': trailColor,
                    'stroke-width': strokeWidth,
                    'stroke-trail-width': strokeTrailWidth
                }).set(value);
            }
        }
    }

    var MAS_Addons_ProgressBar = function($scope, $) {
            var progressBarWrapper = $scope.find('[data-progress-bar]').eq(0);
            if ($.isFunction($.fn.waypoint)) {
                progressBarWrapper.waypoint(function() {
                    var element = $(this.element),
                        id = element.data('id'),
                        type = element.data('type'),
                        value = element.data('progress-bar-value'),
                        strokeWidth = element.data('progress-bar-stroke-width'),
                        strokeTrailWidth = element.data('progress-bar-stroke-trail-width'),
                        color = element.data('stroke-color'),
                        trailColor = element.data('stroke-trail-color');
                    animatedProgressbar(id, type, value, color, trailColor, strokeWidth, strokeTrailWidth);
                    this.destroy();
                }, {
                    offset: 'bottom-in-view'
                });
            }
        }
        // progress bar script ends

    // Pricing Table
    var MAS_Addons_Pricing_Table = function() {

            $("[data-pricing-trigger]").on("click", function(e) {
                $(e.target).toggleClass("active");
                var target = $(e.target).attr("data-target");
                if ($(target).attr("data-value-active") == "monthly") {
                    $(target).attr("data-value-active", "yearly");
                } else {
                    $(target).attr("data-value-active", "monthly");
                }
            })

            // Classic tab switcher
            $("[data-pricing-tab-trigger]").on("click", function(e) {
                $('[data-pricing-tab-trigger]').removeClass("active");
                $(this).addClass("active");
                var target = $(e.target).attr("data-target");
                if ($(target).attr("data-value-active") == "monthly") {
                    $(target).attr("data-value-active", "yearly");
                } else {
                    $(target).attr("data-value-active", "monthly");
                }
            })

        }
        // Pricing Table
        /*
        *
        This code use Tab Widget
        *
        */
    var MAS_Addons_Tab = function($scope, $) {
        $scope.find('ul.tabs li').on('click', function() {
            var tab_id = $(this).attr('data-tab');
            $scope.find('ul.tabs li').removeClass('current');
            $scope.find('.mas-addons-tab-content-single').removeClass('current');
            $(this).addClass('current');
            $scope.find("#" + tab_id).addClass('current');
        })
        if ($.fn.magnificPopup) {
            $('.mas-addons-elm-edit').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade mas-addons-elm-edit-popup',
                callbacks: {
                    open: function() {
                        // Will fire when this exact popup is opened
                        // this - is Magnific Popup object
                    },
                    close: function() {
                            location.reload();

                        }
                        // e.t.c.
                }
            });
            console.log('helw')
        }
    };


    /*  Brand Logo Slider */
    var MAS_Addons_Brand_Logo = function($scope, $) {

        var icarousel = $scope.find(".brand-logo-slider");
        var id = $scope.data('id');

        if (icarousel.length === 0)
            return;

        var datas = icarousel.data('brand');

        var rtl = $('body').hasClass('rtl') ? true : false;
        var apps = $('.brand-logo-slider');

        if (apps.is_exist()) {
            apps.slick({
                rtl: rtl,
                loop: true,
                centerMode: true,
                centerPadding: '0',
                lazyLoad: 'ondemand',
                slidesToShow: datas['per_coulmn'],
                slidesToScroll: 1,
                dots: datas['dots'],
                arrows: datas['nav'],
                appendArrows: '.brand-logo-slider-arrow',
                prevArrow: $('.prev-' + id),
                nextArrow: $('.next-' + id),
                autoplay: datas['autoplay'],
                autoplaySpeed: datas['autoplaytimeout'],
                infinite: datas['loop'],
                easing: 'linear',
                speed: 800,
                appendDots: ".brand-logos-dots",
                responsive: [{
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: datas['per_coulmn'],
                        },
                    },
                    {
                        breakpoint: 1000,
                        settings: {
                            slidesToShow: datas['per_coulmn_tablet'],

                        },
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: datas['per_coulmn_mobile'],
                            centerMode: true,
                            centerPadding: '0',
                        },
                    },
                ],
            })
        }
    }


    // Blog Slider
    var Blog_slider_Js = function($scope) {

        var wrapper = $scope.find(".blog-slider");

        var id = $scope.data('id');

        // console.log(id);

        if (wrapper.length === 0)
            return;

        var settings = wrapper.data('settings');


        wrapper.slick({
            infinite: true,
            speed: 900,
            slidesToShow: settings['per_coulmn'],
            slidesToScroll: 1,
            autoplay: settings['autoplay'],
            autoplaySpeed: settings['autoplaytimeout'],
            arrows: true,
            draggable: settings['mousedrag'],
            dots: settings['dots'],
            centerPadding: '0',
            lazyLoad: 'ondemand',
            centerMode: settings['show_center_mode'],
            dotsClass: "blog-slider-dot-list",
            swipe: false,
            vertical: settings['show_vertical'],
            prevArrow: $('.prev-' + id),
            nextArrow: $('.next-' + id),
            responsive: [{
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: settings['per_coulmn'],
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: settings['per_coulmn_tablet'],
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: settings['per_coulmn_mobile'],
                        slidesToScroll: 1,
                        arrows: false,
                        vertical: false,
                    },
                },
            ],
        });

    }




    /*---------------------------------------------------
    VIDEO BUTTON
    ----------------------------------------------------*/
    var mas_video_button = function ($scope, $) {

        var modalWrapper    = $scope.find( '.mas-modal' ).eq(0),
        modalOverlayWrapper = $scope.find( '.mas-modal-overlay' ),
        modalItem           = $scope.find( '.mas-modal-item' ),
        modalAction         = modalWrapper.find( '.mas-modal-image-action' ),
        closeButton         = modalWrapper.find( '.mas-close-btn' );

        modalAction.on( 'click', function(e) {
            e.preventDefault();
            var modalOverlay = $(this).parents().eq(1).next();
            var modal         = $(this).data( 'mas-modal' );

            var overlay = $(this).data( 'mas-overlay' );
            modalItem.css( 'display', 'block' );
            setTimeout( function() {
                $(modal).addClass( 'active' );
            }, 100);
            if ( 'yes' === overlay ) {
                modalOverlay.addClass( 'active' );
            }

        } );

        closeButton.click( function() {
            var modalOverlay = $(this).parents().eq(3).next();
            var modalItem    = $(this).parents().eq(2);
            modalOverlay.removeClass( 'active' );
            modalItem.removeClass( 'active' );

            var modal_iframe = modalWrapper.find( 'iframe' ),
            $modal_video_tag  = modalWrapper.find( 'video' );

            if ( modal_iframe.length ) {
                var modal_src = modal_iframe.attr( 'src' ).replace( '&autoplay=1', '' );
                modal_iframe.attr( 'src', '' );
                modal_iframe.attr( 'src', modal_src );
            }
            if ( $modal_video_tag.length ) {
                $modal_video_tag[0].pause();
                $modal_video_tag[0].currentTime = 0;
            }

        } );

        modalOverlayWrapper.click( function() {
            var overlay_click_close = $(this).data( 'mas_overlay_click_close' );
            if( 'yes' === overlay_click_close ){
                $(this).removeClass( 'active' );
                $( '.mas-modal-item' ).removeClass( 'active' );

                var modal_iframe = modalWrapper.find( 'iframe' ),
                $modal_video_tag = modalWrapper.find( 'video' );

                if ( modal_iframe.length ) {
                    var modal_src = modal_iframe.attr( 'src' ).replace( '&autoplay=1', '' );
                    modal_iframe.attr( 'src', '' );
                    modal_iframe.attr( 'src', modal_src );
                }
                if ( $modal_video_tag.length ) {
                    $modal_video_tag[0].pause();
                    $modal_video_tag[0].currentTime = 0;
                }
            }
        } );
    }


    //Creative Button
    var Mas_Creative_Button = function($scope) {
        var btn_wrap = $scope.find('.mas-creative-btn-wrap');
        var magnetic = btn_wrap.data('magnetic');
        var btn = btn_wrap.find('a.mas-creative-btn');
        if( 'yes' == magnetic ){
            btn_wrap.on('mousemove', function(e) {
                var x = e.pageX - ( btn_wrap.offset().left + ( btn_wrap.outerWidth() / 2 ) );
                var y = e.pageY - ( btn_wrap.offset().top + ( btn_wrap.outerHeight() / 2 ) );
                btn.css("transform", "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)");
            });
            btn_wrap.on('mouseout', function(e){
                btn.css("transform", "translate(0px, 0px)");
            });
        }
        //For expandable button style only
        var expandable = $scope.find('.mas-eft--expandable');
        var text = expandable.find('.text');
        if ( expandable.length > 0 && text.length > 0 ) {
            text[0].addEventListener("transitionend", function () {
                if (text[0].style.width) {
                    text[0].style.width = "auto";
                }
            });
            expandable[0].addEventListener("mouseenter", function (e) {
                e.currentTarget.classList.add('hover');
                text[0].style.width = "auto";
                var predicted_answer = text[0].offsetWidth;
                text[0].style.width = "0";
                window.getComputedStyle(text[0]).transform;
                text[0].style.width = "".concat(predicted_answer, "px");

            });
            expandable[0].addEventListener("mouseleave", function (e) {
                e.currentTarget.classList.remove('hover');
                text[0].style.width = "".concat(text[0].offsetWidth, "px");
                window.getComputedStyle(text[0]).transform;
                text[0].style.width = "";
            });
        }


    };



    // Content Switcher Handler
    var masContentSwitcher = function ( $scope, $ ) {

        var main_switch = $scope.find( '.mas-content-switcher-toggle-switch' );
        var main_switch_span = main_switch.find( '.mas-content-switcher-toggle-switch-slider' );

        var content_1 = $scope.find('.mas-content-switcher-primary-wrap');
        var content_2 = $scope.find('.mas-content-switcher-secondary-wrap');

        if( main_switch_span.is( ':checked' ) ) {
            content_1.hide();
            content_2.show();
        } else {
            content_1.show();
            content_2.hide();
        }

        main_switch_span.on('click', function(e){
            content_1.toggle();
            content_2.toggle();
        });
    };




    $(window).on("elementor/frontend/init", function() {

        elementorFrontend.hooks.addAction("frontend/element_ready/mas-addons-product-categories.default", MasductCategories);
        elementorFrontend.hooks.addAction("frontend/element_ready/mas-addons-tab.default", MAS_Addons_Tab);
        elementorFrontend.hooks.addAction("frontend/element_ready/mas-modal-video.default", mas_video_button);
        elementorFrontend.hooks.addAction("frontend/element_ready/mas-addons-job-loop.default", ShadeJobLoop);
        elementorFrontend.hooks.addAction("frontend/element_ready/mas-addons-testimonial.default", MAS_Addons_Testimonail);
        elementorFrontend.hooks.addAction("frontend/element_ready/mas-addons-back-to-top.default", MAS_Addons_Back_To_Top);
        elementorFrontend.hooks.addAction("frontend/element_ready/mas-addons-portfolio.default", MAS_Addons_Portfolio_Js);
        elementorFrontend.hooks.addAction("frontend/element_ready/mas-addons-portfolio-gallery.default", MAS_Addons_Portfolio_Gallery_Js);
        elementorFrontend.hooks.addAction("frontend/element_ready/mas-addons-countdown.default", MAS_Addons_CountDown);
        elementorFrontend.hooks.addAction('frontend/element_ready/mas-addons-progress-bar.default', MAS_Addons_ProgressBar);
        elementorFrontend.hooks.addAction('frontend/element_ready/mas-addons-price-table.default', MAS_Addons_Pricing_Table);
        elementorFrontend.hooks.addAction("frontend/element_ready/mas-addons-accordion.default", fdAddonsAccordion);
        elementorFrontend.hooks.addAction("frontend/element_ready/mas-addons-blog.default", Blog_slider_Js);
        elementorFrontend.hooks.addAction("frontend/element_ready/mas-addons-brand-logo.default", MAS_Addons_Brand_Logo);
        elementorFrontend.hooks.addAction("frontend/element_ready/mas-creative-button.default", Mas_Creative_Button);
        elementorFrontend.hooks.addAction("frontend/element_ready/mas-content-switcher.default", masContentSwitcher);
        elementorFrontend.hooks.addAction("frontend/element_ready/global", MasGlobal);

    });

})(jQuery);

