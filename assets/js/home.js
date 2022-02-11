$(document).ready(function () {
    var window_width = $(window).width();
    console.log('Designed & Developed by sOPU');















    // light gallery
    if ($('.Light').length > 0) {
        $(".Light").lightGallery({
            selector: '.light'
        });
    }





    // nice select
    if ($('.Select').length > 0) {
        $('.Select select').niceSelect();
    }



    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation_menu").removeClass("ShowIt");
        } else{
            $(".navigation_menu").addClass("ShowIt");
        }
    });


    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function(){
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });



    //===== Section Menu Active

    var scrollLink = $('.nav-link');
    // Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

            var sectionOffset = $(this.hash).offset().top - 75;

            if ( sectionOffset <= scrollbarLocation ) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });












        // portfolio
    if ($('.FilterWrap').length > 0) {
        var container = $('.FilterWrap');
        var container_height = container.height();
        var $grid = container.isotope({
            itemSelector: '.FilterItem',
            percentPosition: true,
            masonry: {
                columnWidth: '.FilterItem'
            }
        });
        $('.FilterNav a').on('click', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
            $('.FilterNav a').removeClass('active');
            $(this).addClass('active');
            return false;
        });

        // mobile filter
        $('.FilterMobile li').on('click', function () {
            var filterValue = $(this).attr('data-value');
            $grid.isotope({filter: filterValue});
        });

        if (768 < window_width) {
            container.css({'min-height': container_height})
        }


    }





    // review slider

    if ($('.review_init').length > 0) {
        $('.review_init').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 900,
            dots: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            autoplay: false,
            arrows: false,
            draggable: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
                }


            ]
        });

    }



    // parter slider
    if ($('.partners_init').length > 0) {
        $('.partners_init').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 2,
            speed: 900,
            dots: false,
            pauseOnFocus: false,
            pauseOnHover: false,
            autoplay: true,
            arrows: false,
            draggable: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,

                    }
                }


            ]
        });

    }






    // remove br from large screen

    if(1600 <= window_width){
        $('.first_section .container .row h1 br').replaceWith(' ');
    }













//============================= new site js code start














});//document.ready






