$(window).on('load', function () {


    //preloader
    $('.pre-loader').fadeOut("500", function () {
        $('html').removeClass("overflow");
        $(this).remove();
    });

    //search toggle

    $('#search-btn').click(function (e) {
        $('#search-form').toggleClass('search-form-active');
        $('html').toggleClass('overflow');
    });

    $('#search-form').click(function (e) {
        if (e.target.id == 'search-form' || e.target.id == 'close-search' || e.target.parentNode.id == "close-search") {
            $(this).removeClass('search-form-active');
            $('html').removeClass('overflow');
        }
    });


    //nava toggle

    $('#nava-icon').click(function (e) {
        $('#nava').toggleClass('nava-active');
        $('html').toggleClass('overflow');
    });

    $('#nava').click(function (e) {
        if (e.target.id == 'nava' || e.target.id == 'close-nava' || e.target.parentNode.id == "close-nava") {
            $(this).removeClass('nava-active');
            $('html').removeClass('overflow');
        }
    });


    // animate on scroll

    AOS.init({
        duration: 900,
        mirror: true,
        once: true,
        disable: function () {
            var maxWidth = 769;
            return window.innerWidth < maxWidth;
        },
        easing: 'ease-in-out'
    });




});
