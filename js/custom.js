$(function () {
    "use strict";


    //===== Sticky manu 
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $(".riday-manu").addClass("riday");
        } else {
            $(".riday-manu").removeClass("riday");
        }
    });

    // back to top button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 400) {
            $('.back_to_top').fadeIn(200)
        } else {
            $('.back_to_top').fadeOut(200)
        }
    });
    // animate back to top

    $('.back_to_top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 200);
    });
    // counter js
    $('.counter').counterUp();

    //    venobox js
    $(document).ready(function () {
        $('.venobox').venobox();
    });
    //banner-slider
    $('.banner-slider').slick({
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: true,
        // nextArrow: '.arrow-left',
        //  prevArrow: '.arrow-right',
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });
    //test_slider
    $('.test_slider').slick({
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        nextArrow: '.slide_right',
        prevArrow: '.slide_left',
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });

    //clients_slider

    $('.clients_slider_item').slick({
        slidesToShow: 5,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                }
            }
        ]
    });


});
    //========= preloader js
    $(window).on('load', function() {
        $(".preloader").delay(1500).fadeOut(500);
    });