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





$(window).on('load',function(){
	$('body').addClass('loaded');
	
	var aktiffButt = $('.tab-butt.akktiff').attr('data-target');
	showTabBlock( aktiffButt );

});






