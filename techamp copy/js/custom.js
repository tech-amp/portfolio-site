/*global $ ,jQuery ,alert, console, Typed, Swiper, WOW */

// Loading Screen 
    
$(window).on('load', function () {
    
    "use strict";

    $('.loading-overlay .cssload-loader').fadeOut(1000, function () {

        $(this).parent().fadeOut(1000, function () {

            $('body').css('overflow', 'auto');
            $(this).remove();

        });

    });

});

$(function () {
   
    "use strict";
    
    var sections = $('section'),
        documentEl = $(document),
        parallaxBg = $('.home-paralax'),
        nav = $('nav'),
        nav_height = nav.outerHeight(),
        smoothScroll = $("nav ul li a"),
        progressBar = $(".progress-bar"),
        scrolltop = $('.scrolltop'),
        colors   = $('.color-option .colors li'),
        dl   = $('.color-option .dl li'),
        // Initialize Swiper Plugin
        swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            grabCursor: true,
            autoplay: 6000,
            autoplayDisableOnInteraction: false
        }),
        // Typed Plugin
        typed = new Typed('.type', {
            strings: ["We are Frontend Developers.", "Web Designers.", "marketing optimizers."], /* Here Type Your Title */
            typeSpeed: 120,
            loop: true,
            backDelay: 1200,
            backSpeed: 20
        });
    
    // Smooth Scroll Down
    
    smoothScroll.on("click", function () {
        
        $("html, body").animate({
            
            scrollTop : $("#" + $(this).data("value")).offset().top
            
        }, 1000);
        
        
    });
    
    
    $(".home .down").on("click", function () {
        
        $("html, body").animate({
            
            scrollTop : $("#about").offset().top
            
        }, 1000);
        
    });
    
    // Paralax

    documentEl.on('scroll', function () {
                   
        var currScrollPos = documentEl.scrollTop();
                   
        parallaxBg.css('background-position', '0 ' + -currScrollPos / 4 + 'px');
    
    });
    
    // Active Class On Scroll 
    
    $(window).on('scroll', function () {
        
        var cur_pos = $(this).scrollTop();
        
        sections.each(function () {
            
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                
            }
        });
    });
    
    // Scrolling Navbar
    
    $(window).on("scroll", function () {
        
        if ($(document).scrollTop() > 350) {
            
            $('nav').addClass('shrink');
            
        } else {
            
            $('nav').removeClass('shrink');
            
        }
    });
    
    $(window).on("scroll", function () {
        
        if ($(document).scrollTop() > 350) {
            
            $('.navbar a .bg_logo').removeClass('bg_logo_light');
            $('.navbar a .bg_logo').addClass('bg_logo_dark');
            
        } else {
            
            $('.navbar a .bg_logo').removeClass('bg_logo_dark');
            $('.navbar a .bg_logo').addClass('bg_logo_light');
            
        }
    });
    
    // Progress Bar
    
    progressBar.each(function () {
        var progressBarWidth = $(this).data('present');
        /*-- Skill Animation --*/
        $(this).css({
            "opacity": "1",
            "width": progressBarWidth
        });
    });
    
    // Counter Up
    
    $('.counter').counterUp({
        delay: 20,
        time: 1500
    });
    
    // Show More / Show Less Button
    
    $('.show-more, .show-less').on("click", function () {
        
        $('.work .info .less').fadeIn(1000, function () {
            
            $('.show-more').hide();
            $('.show-less').show();
            $('.show-less').on("click", function () {
                
                $('.work .info .less').fadeOut(1000);
                $('.show-less').hide();
                $('.show-more').show();
            });
            
        });
        
    });
    
    // Scroll Top 
    
    
    $(window).on("scroll", function () {
        
        var sc = $(this).scrollTop();
        
        if (sc > 1700) {
            
            scrolltop.fadeIn(1000);
            
        } else {
            
            scrolltop.fadeOut(1000);
            
        }
        
    });
    
    scrolltop.on("click", function () {
        
        $('html, body').animate({
            
            scrollTop: 0
            
        }, 1000);
        
    });
    
    // Change Template Colors
    
    colors.eq(0).css("backgroundColor", "#1abc9c").end()
           .eq(1).css("backgroundColor", "#35b2b3").end()
           .eq(2).css("backgroundColor", "#ddaa33").end()
           .eq(3).css("backgroundColor", "#cc2d50");
        
    colors.on('click', function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        
    });
    
    dl.eq(0).css("backgroundColor", "#1E1E1E").end()
        .eq(1).css("backgroundColor", "#FFF");
    
    dl.on('click', function () {
        
        $("link[href*='template']").attr("href", $(this).attr("data-value"));
        
    });
    
    // Show Color Option Div When Click On The Gear
    
    $(".option-box").on("click", function (e) {
        e.preventDefault();
        
        if ($(this).hasClass("slide_in_out")) {
            $(".option-box").stop().animate({right: "0px"}, 500);
            $(".color-option").stop().animate({right: "-185px"}, 500);
        } else {
            $(".option-box").stop().animate({right: "178px"}, 500);
            $(".color-option").stop().animate({right: "0"}, 500);
        }
        
        $(this).toggleClass("slide_in_out");
        return false;
        
    });
    
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<span class="slick-prev"> < </span>',
        nextArrow: '<span class="slick-next"> > </span>'
    });
    
    // Wow Plugin
    
    new WOW().init();
    
});



// For Demo
    
$(document).ready(function () {
    
    "use strict";

    $(".header-demo .demo button").on("click", function () {

        $("html, body").animate({

            scrollTop : $("#demos").offset().top

        }, 1000);

    });
});