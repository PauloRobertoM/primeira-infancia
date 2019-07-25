(function($, window) {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        dots: false,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    var perfil = $("#perfil").position();
    var consultoria = $("#consultoria").position();
    var area = $("#area").position();
    var contato = $("#contato").position();

    $('.perfil').click(function() {
        $('html, body').animate({
            scrollTop: perfil.top
        }, 500);
        return false;

      }); // left menu link2 click() scroll END

    $('.consultoria').click(function() {
        $('html, body').animate({
            scrollTop: consultoria.top
        }, 500);
        return false;

      }); // left menu link2 click() scroll END

    $('.area').click(function() {
        $('html, body').animate({
            scrollTop: area.top
        }, 500);
        return false;

      }); // left menu link3 click() scroll END

    $('.contato').click(function() {
        $('html, body').animate({
            scrollTop: contato.top
        }, 500);
        return false;

      }); // left menu link3 click() scroll END
})(jQuery, window);