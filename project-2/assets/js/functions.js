(function($) {
    'use strict';

    $(document).ready(function() {


    }); //end ready

}(jQuery));

//MENU-TRIGGER
function chelnokovMenu() {
    var $trigger = $('.trigger-nav'),
        $menu = $('.trigger-victim');
    $trigger.click(function() {
        $(this).next($menu).slideToggle();
    });
    $(window).resize(function() {
        if ($(window).width() > 992) {
            $menu.removeAttr('style');
        }
    });
}
chelnokovMenu();

//==STICKY MENU
var navPos, winPos, navHeight;

function refreshVar() {
    navPos = $('.site-nav').offset().top;
    navHeight = $('.site-nav').outerHeight(true);
}

refreshVar();
$(window).resize(refreshVar);

$('<div class="clone-nav"></div>').insertBefore('.site-nav').css('height', navHeight).hide();

$(window).scroll(function() {
    winPos = $(window).scrollTop();

    if (winPos >= navPos) {
        $('.site-nav').css({
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'width': '100%',
        });
        $('.clone-nav').show();
    } else {
        $('.site-nav').css({
            'position': 'static',
        });
        $('.clone-nav').hide();
    }
});
// SWIPER
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30,
    paginationType: 'progress',
    autoHeight: true,
    grabCursor: true,
    nested: true,
    freeModeMomentumBounce: false,
    freeModeMinimumVelocity: 0.001
});

//SLIDER - RESPONSIVE
$(window).resize(function() {
    if ($(window).width() < 945) {
        swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 2,
            paginationClickable: true,
            spaceBetween: 30,
            paginationType: 'progress',
            autoHeight: true,
            grabCursor: true,
            freeMode: true,
            freeModeSticky: true,
            nested: true,
            freeModeMomentumBounce: false,
            freeModeMinimumVelocity: 0.001
        });
    }
    if ($(window).width() < 750) {
        swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 10,
            paginationType: 'progress',
            autoHeight: true,
            grabCursor: true,
            freeMode: true,
            freeModeSticky: true,
            nested: true,
            freeModeMomentumBounce: false,
            freeModeMinimumVelocity: 0.001
        });
    }
    if ($(window).width() > 750 && $(window).width() < 945) {
        swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 2,
            paginationClickable: true,
            spaceBetween: 30,
            paginationType: 'progress',
            autoHeight: true,
            grabCursor: true,
            freeMode: true,
            freeModeSticky: true,
            nested: true,
            freeModeMomentumBounce: false,
            freeModeMinimumVelocity: 0.001
        });
    }
    if ($(window).width() > 945) {
        swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 30,
            paginationType: 'progress',
            autoHeight: true,
            grabCursor: true,
            freeMode: false,
            nested: true,
            freeModeMomentumBounce: false,
            freeModeMinimumVelocity: 0.001
        });
    }
});
