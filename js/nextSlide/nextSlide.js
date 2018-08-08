function ImagiSlide(a){
	var clasForDivImage = a;

	$('.slick-arrow[type=button]').append("<div class='" + clasForDivImage + "'></div")

	var activelem = parseInt( $('div.slick-current.slick-active').attr("data-slick-index") );
	var prevelem = $('div[data-slick-index=' + (activelem - 1) + '] img').clone();
		$(".slick-prev ." + clasForDivImage).append(prevelem);
	var nextelem = $('div[data-slick-index=' + (activelem + 1) + '] img').clone();
		$(".slick-next ." + clasForDivImage).append(nextelem);


	  $('.slick-prev, .slick-next, .slick-dots>li').on('click',function(){
		var activelem = parseInt( $('div.slick-current.slick-active').attr("data-slick-index") );

		var prevelem = $('div[data-slick-index=' + (activelem - 1) + '] img').clone();
		if( $(".slick-prev ." + clasForDivImage).is(':has(img)') ){
			$(".slick-prev ." + clasForDivImage).empty();
			$(".slick-prev ." + clasForDivImage).append(prevelem);
		}else{
			$(".slick-prev ." + clasForDivImage).append(prevelem );
		}

		var nextelem = $('div[data-slick-index=' + (activelem + 1) + '] img').clone();
		if( $(".slick-next ." + clasForDivImage).is(':has(img)') ){
			$(".slick-next ." + clasForDivImage).empty();
			$(".slick-next ." + clasForDivImage).append(nextelem);
		}else{
			$(".slick-next ." + clasForDivImage).append(nextelem);
		}

	});

}