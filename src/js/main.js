
function addClassToSearchOnMobile(){
	var ww = $(window).width();
	if( ww < 769 ){
		$('body').removeClass('is-desktop');
		$('body').addClass('is-mobile');
	}
	else{
		$('body').removeClass('is-mobile');
		$('body').addClass('is-desktop');
	}


	// console.log( $('body').attr('class') );
	
	if( $('body').hasClass('is-mobile') ){
		
		$('.kd89__sliddr').each(function() {
			$(this).slick({
			  infinite: false,
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  prevArrow: $(this).siblings('.kd89__sliddr--prev'),
	  		nextArrow: $(this).siblings('.kd89__sliddr--next'),
		 	});		
		});

	}

}


$(window).on('resize', function(){
	addClassToSearchOnMobile();
});



$(window).on('load',function(){
	addClassToSearchOnMobile();
});


$(document).ready(function(){





	$('body').addClass('loaded');

	function showTabBlock( target ){
		$(target).css('display','block').addClass('active');
	}

	function showActiveImg( target ){
		$(target).fadeIn(200);
	}
	
	

	$('body').on('click','.elem-1__menu a', function(e){
		e.preventDefault();
		var objj = {};
		objj.curr = $(this);
		if( objj.curr.hasClass('acctiiff') ){
			return false;	
		}
		else{
			$('.elem-1__menu a.acctiiff').removeClass('acctiiff');
			objj.curr.addClass('acctiiff');
			$('.elem-1__img').css('display', 'none');
			$(objj.curr.attr('href')).css('display', 'block');		
		}
	});	


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
			$( objj.curr.attr('data-target') ).addClass( 'active' );
		}
	});

	$('body').on('click','.custt__modal', function(e){
		if( $(e.target).hasClass('custt__modal') ){
			$(this).css('display', 'none');
			$('body').removeClass('ov-hidd');
		}
	});	

	$('body').on('click','.your-city__cont a', function(e){
		return false;
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
	  autoplaySpeed: 1500,
	  speed: 1300,
	  prevArrow: '.new__slider-prev',
	  nextArrow: '.new__slider-next',
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
	
	
	//MODAL
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
				if( this.targg.length ){
					$('body').addClass('ov-hidd');
					this.$targg.css('display','block');	
				}
					
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

	
	var aktiffButt = $('.tab-butt.akktiff').attr('data-target');
	showTabBlock( aktiffButt );

	var acctiiffImg = $('.elem-1__menu .acctiiff').attr('href');
	showActiveImg( acctiiffImg );	








// $('.tab-butt').each(function() {
// 	var slidds =	$( $(this).attr('data-target') ).clone();
// 	$('.tab-list').append(slidds);
// });








//SLIDER PRODUCTION
$('.kd89-sliddrBig').each(function(){
	// console.log( $(this).parent().siblings('.kd89-sliddrSmall__wrapp').find('.kd89-sliddrSmall') );
	$(this).slick({
	  infinite: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: $(this).siblings('.kd89-sliddrBig__prev'),
	  nextArrow: $(this).siblings('.kd89-sliddrBig__next'),
 		asNavFor: $(this).parent().siblings('.kd89-sliddrSmall__wrapp').find('.kd89-sliddrSmall')[0],
 	});
});

$('.kd89-sliddrSmall').each(function(){
	$(this).slick({
	  infinite: false,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  arrows: false,
	  asNavFor: $(this).parent().siblings('.kd89-sliddrBig__wrapp').find('.kd89-sliddrBig')[0],
	  focusOnSelect: true,
	  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }]
	});	
});






// $('.kd89__sliddr').each(function(){
// 	console.log( $(this) );

// 	if( $('body').hasClass('is-mobile') ){
// 		alert('dcsdc');

// 		$('.kd89__sliddr').slick({
// 		  infinite: false,
// 		  slidesToShow: 1,
// 		  slidesToScroll: 1,
// 	 	});
// 	}
	
// });





	$('#sliddr__reviewz').slick({
	  infinite: false,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  dots: true,
	  prevArrow: '#sliddr__wrapp_reviewz .sliddr__prev',
	  nextArrow: '#sliddr__wrapp_reviewz .sliddr__next',
	  appendDots: '.sliddr__dots',
	   responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    },
	    
	  ]
	});








	
});