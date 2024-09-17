$(document).ready(function () {
    console.log("ready!");
    let owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 46,
        nav: false,
        responsiveClass: true,
        loop: true,
        dotsContainer: '.navigation-dots',
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3,
                margin: 75
            },
            1640: {
                items: 3,
                margin: 75
            },
            1920: {
                items: 3,
                margin: 46
            }
        }
    });

    $('.navigation-owl .next').click(function () {
        owl.trigger('next.owl.carousel');
    });
    $('.navigation-owl .prev').click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $('header .block .nav .mobile-btn button').click(function () {
        let mobileBtn = $('header .block .nav .mobile-btn button');
        if (mobileBtn.hasClass('active')) {
            mobileBtn.removeClass('active');
        } else mobileBtn.addClass('active');

        if ($(window).width() > 767) {
            $('header .big-menu').toggleClass('active');
        }
        if ($(window).width() < 768) {
            let mobileBlock = $('header .mobile-block');
            if(mobileBlock.hasClass('active')) {
                mobileBlock.removeClass('active');
            } else {
                mobileBlock.addClass('active');
            }
        }
    });


});