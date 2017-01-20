var userclosed = false;
var toggle_slider = false;

jQuery(function($) {
    //Presets
    var presets = $('.style-chooser ul li');
    $('.style-chooser .toggler').on('click', function(event) {
        event.preventDefault();
        $(this).closest('.style-chooser').toggleClass('opened');

        if ($(this).hasClass('opened') == false && window.pageYOffset >= 150)
            userclosed = true;
    });
    $('.style-chooser ul li a').on('click', function(event) {
        event.preventDefault();
        presets.removeClass('active');
        $(this).parent().addClass('active');
        $('#css-preset').removeAttr('href').attr('href', 'css/presets/preset' + $(this).parent().data('preset') + '.css');
    })

});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

jQuery(function($) {
    'use strict';

    // Navigation Scroll
    $(window).scroll(function(event) {
        Scroll();
    });

    $('.navbar-collapse ul li a').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 5
        }, 1000);
        return false;
    });

    // User define function
    function Scroll() {
        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;
        $('.navbar-collapse').find('.scroll a').each(function() {
            // contentTop.push($($(this).attr('href')).offset().top);
            // contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
        });
        $.each(contentTop, function(i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.navbar-collapse li.scroll')
                    .removeClass('active')
                    .eq(i).addClass('active');
            }
        });
    }

    // Contact form
    var form = $('#main-contact-form');
    form.submit(function(event) {
        event.preventDefault();
        var form_status = $('<div class="form_status"></div>');
        $.ajax({
            url: $(this).attr('action'),
            beforeSend: function() {
                form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());
            }
        }).done(function(data) {
            form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
        });
    });

    //Pretty Photo
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });

});



$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 150;
    // set to whatever you want it to be

    if (y_scroll_pos > scroll_pos_test && !userclosed) {
        //call open func

        $('.style-chooser .toggler').closest('.style-chooser').addClass('opened');
    } else {
        $('.style-chooser .toggler').closest('.style-chooser').removeClass('opened');
        //call close func
    }
});

//For mobile nav
function hideMainNavBar() {
    if ($('#mainNavBar').hasClass('in')) {
        $('#mainNavBar').removeClass('in');
        $('.style-chooser').animate({
            'padding-top': '0px'
        }, 300);
        toggle_slider = false;
    }
}

$(document).ready(function() {
    $('#menu-button').click(function() {
        console.log("entered");
        slidertoggle();
    });
});

