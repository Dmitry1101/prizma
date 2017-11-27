function showTabBlock( target ){
	$(target).fadeIn(200, function(){
		$(this).addClass('active');
	});
}

$(document).ready(function(){
	
	//CLICKING TABS
	$('body').on('click','.tab-butt', function(e){
		e.preventDefault();
		var objj = {};
		objj.curr = $(this);
		if( objj.curr.hasClass('akktiff') ){
			return false;	
		}
		else{
			$('.tab-butt.akktiff').removeClass('akktiff');
			objj.curr.addClass('akktiff');
			

			$('.tab-block.active').removeClass('active');

			// $(this).removeClass('active');

			$( objj.curr.attr('data-target') ).addClass( 'active' );

			
		}
	});


	//SPINNER
	(function () {
		
		//Stop people from typing
		$('.kd89-num__spinner').keydown(function(e){
		    e.preventDefault();
		    return false;
		});
		var minNumber = 1;
		var maxNumber = 100;
		$('.kd89-num__wrap .increase').on('click', function() {
		    if($('.kd89-num__spinner').val() == maxNumber){
		        return false;
		    }else{
		        $('.kd89-num__spinner').val( parseInt($('.kd89-num__spinner').val(), 10) + 1);
		    }
		});

		$('.kd89-num__wrap  .decrease').on('click', function() {
		    if($('.kd89-num__spinner').val() == minNumber){
		        return false;
		    }else{
		        $('.kd89-num__spinner').val( parseInt($('.kd89-num__spinner').val(), 10) - 1);
		    }
		});	

	})(); 


	$('.new__slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  autoplay: true,
	  autoplaySpeed: 1500,
	  speed: 1300,
	});

	
	$('.elem-10__slidd').slick({
	  infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  prevArrow: '.elem-10__prev-1',
	  nextArrow: '.elem-10__next-1',
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$('.elem-10__slidd-2').slick({
	  infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  prevArrow: '.elem-10__prev-2',
	  nextArrow: '.elem-10__next-2',
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});





	$('.sliddr__control').hover(function(){
		$(this).children('.icon').toggleClass('active');		
	},function(){
		$(this).children('.icon').toggleClass('active');		
	}); 


	//CALCULATOR
	$('input.kd_calc_rad1').change(function() {
		var obj = {};
		obj.curr = $(this);
		$('#kd_numb_sum').html( obj.curr.attr('data-price') );
		$('.calc__main-width span').html( obj.curr.attr('data-width') );	
		$('.calc__main-height span').html( obj.curr.attr('data-height') );
		$('#kd_numb_mont').html( obj.curr.attr('data-montaj') );	
		$('#kd_numb_otdel').html( obj.curr.attr('data-otdelka') );	

	});


	// MOBILE MENU
	$('body').on('click','.hamburger', function(e){
		e.preventDefault();
		$(this).toggleClass('is-active');
		if( $('.mob-menu__wrapp').css('display') == 'none' ){
			$('.mob-menu__wrapp').css('display', 'block');
		}
		else{
			$('.mob-menu__wrapp').css('display', 'none');
		}
		$('body').toggleClass('ov-hidd');
	});

	$('body').on('click','.mob-menu__close', function(e){
		e.preventDefault();
		$('.hamburger').toggleClass('is-active');
		$('.mob-menu__wrapp').css('display', 'none');
		$('body').toggleClass('ov-hidd');
	});	
	
});



	$('body').on('click','.to-mod', function(e){
		e.preventDefault();
		var obj = {
			curr: $(this),
			init: function(){
				this.targg = this.curr.attr('data-too');
				this.titl = this.curr.attr('data-titl');
				this.$targg = $(this.targg);
				this.$targg.find('.cusst__title').html( this.titl );	
				this.$targg.find('.form-subm').html( this.titl );	

				$('body').addClass('ov-hidd');

				this.$targg.css('display','block');
			}
		}
		obj.init();
	});

	$('body').on('click','.modal .close', function(e){
		e.preventDefault();
		var obj = {
			curr: $(this),
			init: function(){
				$('body').removeClass('ov-hidd');
				$('.modal').css('display','none');
			}
		}
		obj.init();
	});



$(window).on('load',function(){
	$('body').addClass('loaded');
	
	var aktiffButt = $('.tab-butt.akktiff').attr('data-target');
	showTabBlock( aktiffButt );

});






