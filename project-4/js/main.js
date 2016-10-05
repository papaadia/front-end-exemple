/* ver 1.10 */
jQuery(function($) {
	
	/MSIE [6-8]|Mac/i.test(navigator.userAgent)||$("header, article, footer").each(function(){if("fixed"==$(this).css("backgroundAttachment")){var i=$(this),a=/WebKit/i.test(navigator.userAgent)?9:8;i.addClass("froid-fixed-bg").data({bgX:i.css("backgroundPosition").slice(0,i.css("backgroundPosition").indexOf(" ")),bgY:i.css("backgroundPosition").slice(i.css("backgroundPosition").indexOf(" ")),margin:a})}}),$(window).bind("SIModal.modalShow",function(){$(".froid-fixed-bg").each(function(){var i=$(this);i.css("backgroundPosition","calc("+i.data("bgX")+" - "+i.data("margin")+"px) "+i.data("bgY"))})}),$(window).bind("SIModal.modalClose",function(){$(".froid-fixed-bg").each(function(){var i=$(this);i.css("backgroundPosition",i.data("bgX")+" "+i.data("bgY"))})});
	
	if(is_mobile()) {
		
		$("header, article, footer").each(function(){if ("fixed" == $(this).css("backgroundAttachment")) $(this).css('backgroundAttachment', 'scroll');});
		$('#jump').addClass('mobile');
		$('#video, #video2, #video3').remove();
		$('html').css('width', window.innerWidth + 'px');
		$('.cre-animate').css({'visibility' : 'visible', 'top' : 0, 'left' : 0, 'transform': 'none', '-webkit-transform': 'none', '-moz-transform': 'none', '-ms-transform': 'none', '-o-transform': 'none', 'scale' : 1, 'opacity' : 1}).removeClass('.cre-animate');
		
	}else{
	
		$(window).load(function() {
			
			$('#why').seainside_screen_control(800);
			$('#steps').seainside_screen_control(400);

		});
		
		// Loss
		$('#loss').seainside_screen_control(300);
		$('#loss').bind('start-animation', function() {
			$('.count-to').countTo({refreshInterval:10, speed:2500,formatter : 
				function(value, options) {
					return value.toFixed(0).toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ");
				}
			});
		});
	
	}
	
	if ($(window).width() < 1500) {
		$('#jump').addClass('mobile');
	}

	$.fn.SIInit = function() {
		$('a[data-rel]').each(function() {$(this).attr('rel', $(this).data('rel'));});
		$('a[rel^=fancybox]').not('.cloned a').fancybox({
			helpers : {
				thumbs : true
			}
		});
			
		$('.client-phone').mask('+7 (999) 999-99-99');

		$('input[placeholder], textarea[placeholder]').placeholder();

		$('.send-form').unbind('submit').bind('submit', function() {
			
			var name = $(this).find('.client-name');
			var mail = $(this).find('.client-mail');
			var phone = $(this).find('.client-phone');
			var mess = $(this).find('.client-message');
			var button = $(this).find('input[type=submit], button');
			
			if (button.hasClass('disabled')) return false;
			
			button.addClass('disabled');
			
			send = 1;
			
			if (name.val() == '') {
				name.si_show_message('Укажите Ваше имя');
				send = 0;
			}
					
			if (phone.size() > 0 && phone.val() == '') {
				phone.si_show_message('Укажите Ваш телефон');
				send = 0;
			}
							
			if (mail.size() > 0 && mail.val() == '') {
				mail.si_show_message('Укажите Ваш E-mail');
				send = 0;
			}
									
			if (mess.size() > 0 && mess.val() == '') {
				mess.si_show_message('Укажите Ваше сообщение');
				send = 0;
			}
			
			if (send == 0) {
				button.removeClass('disabled');
				return false;
			}
			
			$.post($(this).prop('action'), $(this).serialize(), function(res) {
			
				if (res.success == 1) {
		
					$('.si-modal').fadeOut(500);
					
					setTimeout(function() {
					
						$('.si-modals-wrapper, .si-success-modal').fadeIn(500);
						$('.si-overlay').css({'height': $(document).height(), 'width' : $(document).width()}).fadeIn(500);
					
					},510)

					
					name.val('');
					if (phone.size() > 0) phone.val('');
					if (mail.size() > 0) mail.val('');
					if (mess.size() > 0) mess.val('');
					
					/*
					
						yaCounter.reachGoal('target' + res.id);
						ga('send', 'event', res.gcode, res.gcode);
						
					*/
					
				}else{
					alert(res.text);
				}
				
				button.removeClass('disabled');
				
			}, 'json');
			
			return false;
		
		});
	
	};
	
	$.fn.SIInit();

	
	$("span.rotate").textrotator({
		animation: "dissolve",
		separator: "|", 
		speed: 8000
	});
	
		var mh = 0;
		$('.services-row').each(function(){
			$(this).find('.service-item').each(function() {
				mh = Math.max($(this).height(), mh);
			});
			$(this).find('.service-item').animate({'min-height' : mh}, 500);
		});
	
	var labels = [];
	
	$('.arrow-jump-label').reverse().each(function(){
		var a = {offset : $(this).offset().top, id : $(this).prop('id')};
		labels.push(a);
	})
	
	$(window).bind('load scroll resize', function() {
		
		var top = $(window).scrollTop();
		
		var no_found = true;
		$.each(labels, function(index, value) {
			
			if (isVisibleOnPage('#' + value['id']) && no_found) {
				
				if (typeof labels[index+1] !== 'undefined')
					$('.jump-link.top').attr('href', '#' + labels[index+1]['id']);
									
				if (typeof labels[index-1] != 'undefined')
					$('.jump-link.bottom').attr('href', '#' + labels[index-1]['id']);

				no_found = false;
				
			}
			
		})

		if (top == 0) {
			$('.jump-link.top').addClass('invisible');
			$('.jump-link.bottom').attr('href', '#services');;
		}else{
			$('.jump-link.top').removeClass('invisible');
		}

		if (top + window.innerHeight + 100 >= $(document).height()) {
			$('.jump-link.top').attr('href', '#steps');
			$('.jump-link.bottom').addClass('invisible');
			no_found = false;
		}else{
			$('.jump-link.bottom').removeClass('invisible');
		}
		
	});
	
	$(window).trigger('resize');

	$('.projects').owlCarousel({autoHeight:true,loop:true,items:1,margin:5,nav:true,dots:true,navText:['<span class="si-arrow-left"></span><span class="si-arrow-left hovered"></span>', '<span class="si-arrow-right"></span><span class="si-arrow-right hovered"></span>'],
		onChange : function(){}
	});
	$('#projects').on('mouseenter', '.owl-prev, .owl-next, .owl-dot', function() {});

	$('.mails').owlCarousel({loop:true,items:3,margin:5,nav:true,dots:true,navText:['<span class="si-arrow-left"></span><span class="si-arrow-left hovered"></span>', '<span class="si-arrow-right"></span><span class="si-arrow-right hovered"></span>'],
		onChange : function(){}
	});
	$('#mails').on('mouseenter', '.owl-prev, .owl-next, .owl-dot', function() {});
	
	$('.si-jump').si_jump();

	SIModal.init();
		
		SIModal.attachModal('.open-phone-modal', '.phone-modal', {'.send-extra' : 'extra'});
		SIModal.attachModal('.open-more-modal', '.more-modal');
		SIModal.attachModal('.open-simple-modal', '.simple-modal');
		SIModal.attachModal('.open-work-modal', '.work-modal');

		SIModal.attachModal('.open-work-modal', '.work-modal');
		
		SIModal.attachModal('.open-service1-modal', '.service1-modal');
		SIModal.attachModal('.open-service2-modal', '.service2-modal');
		SIModal.attachModal('.open-service3-modal', '.service3-modal');
		SIModal.attachModal('.open-service4-modal', '.service4-modal');
		SIModal.attachModal('.open-service5-modal', '.service5-modal');
		SIModal.attachModal('.open-service6-modal', '.service6-modal');
		SIModal.attachModal('.open-service7-modal', '.service7-modal');
		
		SIModal.attachModal('.otziv-btn', '.comment-modal');

		SIModal.attachClose('.si-close');
		
});

$(function() {

	function VPos() {
		var scroll = $(window).scrollTop();	
	    if(scroll>86){
	        $('#nav-menu').addClass('scrolled');
	      }else{
	        $('#nav-menu').removeClass('scrolled');
	    }
	}	

	VPos();
	$(window).scroll(function () {
		VPos();
  	});


	$('a[data-type="scroll"]').click( function() {
	      var scroll_el = $(this).attr('href');
	      if ($(scroll_el).length != 0) {
	        $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 43 }, 500);
	        redirectPage(scroll_el);
	      }
	      return false;
	});
	function redirectPage(url){
	  newUrlParts = url.split("#");
	  currentUrlParts = window.location.href.split("#");
	  window.location.href = url; 
	}

});
