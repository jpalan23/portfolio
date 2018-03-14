jQuery(document).ready(function($){



	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content,.parallax-left').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content,.parallax-left').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});


$(document).ready(function () {
	$('.js--section-about').waypoint(function(direction) {
		if(direction=="down"){
			$('nav').addClass('sticky');
		}else {
			$('nav').removeClass('sticky');
		}
	},{
		offset:'80px'
	});

	$('.js--to-about').click(function () {
		$('html,body').animate({scrollTop: $('.js--to-about').offset().top},1000);
	});

	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});

	$('.js--waypoint-1').waypoint(function (direction) {
		$('.js--waypoint-1').addClass('animated fadeIn');
	},{
		offset:'75%'
	});

	$('.js--waypoint-2').waypoint(function (direction) {
		$('.js--waypoint-2').addClass('animated fadeIn');
	},{
		offset:'75%'
	});

	$('.js--waypoint-3').waypoint(function (direction) {
		$('.js--waypoint-3').addClass('animated fadeIn');
	},{
		offset:'75%'
	});

	$('.js--waypoint-4').waypoint(function (direction) {
		$('.js--waypoint-4').addClass('animated fadeIn');
	},{
		offset:'75%'
	});

});

