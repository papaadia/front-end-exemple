(function ($) {
  'use strict';

  $(document).ready(function () {





  }); //end ready

}(jQuery));

//MENU-TRIGGER
function chelnokovMenu() {
	var $trigger = $('.trigger-nav'),
		$menu = $('.trigger-victim');
	$trigger.click(function(){
		$(this).next($menu).slideToggle();
	});
	$(window).resize(function(){
		if ( $(window).width()>992){
			$menu.removeAttr('style');
		}
	});
}
chelnokovMenu();

// SWIPER
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        paginationType: 'progress',
        autoHeight: true,
        grabCursor: true,
        nested:true,
        freeModeMomentumBounce: false,
        freeModeMinimumVelocity: 0.001
    });

//SLIDER - RESPONSIVE
$(window).resize(function(){
		if ( $(window).width()<945){
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
		        nested:true,
		        freeModeMomentumBounce: false,
                freeModeMinimumVelocity: 0.001
    		});
		}
		if ( $(window).width()<750){
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
		        nested:true,
		        freeModeMomentumBounce: false,
                freeModeMinimumVelocity: 0.001
    		});
		}
		if ( $(window).width() > 750 && $(window).width() < 945){
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
		        nested:true,
		        freeModeMomentumBounce: false,
                freeModeMinimumVelocity: 0.001
    		});
		}
		if ($(window).width()>945){
				swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        slidesPerView: 3,
		        paginationClickable: true,
		        spaceBetween: 30,
		        paginationType: 'progress',
		        autoHeight: true,
		        grabCursor: true,
		        freeMode: false,
		        nested:true,
		        freeModeMomentumBounce: false,
                freeModeMinimumVelocity: 0.001
			});
		}
});