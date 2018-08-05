(function($) {
"use strict";
    


    // Text Rotator
    $.fn.extend({ 
            rotaterator: function(options) {

                var defaults = {
                    fadeSpeed: 500,
                    pauseSpeed: 100,
                    child:null
                };
                 
                var options = $.extend(defaults, options);
             
                return this.each(function() {
                      var o =options;
                      var obj = $(this);                
                      var items = $(obj.children(), obj);
                      items.each(function() {$(this).hide();});
                      if(!o.child){var next = $(obj).children(':first');
                      }else{var next = o.child;
                      }
                      $(next).fadeIn(o.fadeSpeed, function() {
                            $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
                                var next = $(this).next();
                                if (next.length === 0){
                                        next = $(obj).children(':first');
                                }
                                $(obj).rotaterator({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
                            });
                        });
                });
            }
        });
    // /Text Rotator

    // Hide Mobile menu
    function mobileMenuHide() {
        var windowWidth = $(window).width();
        if (windowWidth < 1024) {
            $('#site_header').addClass('mobile-menu-hide');
        }
    }
    // /Hide Mobile menu

    // Animate page loader
    $(window).on('load', function() {
        $(".preloader").fadeOut("slow");
    });

    $(document).ready(function(){

        // Initialize Portfolio grid
        var $portfolio_container = $("#portfolio-grid");

        $portfolio_container.imagesLoaded(function () {
            setTimeout(function(){
            }, 500);
        });

        // Portfolio hover effect init
        $(' #portfolio_grid > figure > a ').each( function() { $(this).hoverdir(); } );

        // Mobile menu
        $('.menu-toggle').click(function() { 
            $('#site_header').toggleClass('mobile-menu-hide');
        });

        // Text rotator init
        $('#rotate').rotaterator({fadeSpeed:800, pauseSpeed:1900});
 



    });

    // Mobile menu hide
    $(window).on('resize', function() {
         mobileMenuHide();
    });

    // Mobile menu hide on main menu item click
    $('.site-main-menu').on("click", "a", function (e) {
        mobileMenuHide();
    });

})(jQuery);
