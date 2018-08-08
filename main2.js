$(document).ready(function(){

	//menu
	//scroll
	$(window).on('wheel MozMousePixelScroll', function(event) {
    var delta = parseInt(event.originalEvent.wheelDelta);
    var menu = $('.home-menu').offset().top;
    if (delta < 0){
    	$('.home-menu').css("top", "-100%");
    } else{
    	$('.home-menu').css("top", "0");
    }
  });

  $(window).on('scroll', function(event) {
    var menu = $('.home-menu').offset().top;
    	if(menu <= 10 && menu > -450){
	    	$('.home-menu').css("background", "transparent");
	    }else{
	    	$('.home-menu').css("background", "rgba(24,28,29,0.95)");
	    }
    	if(menu <= 10 && menu > -450){
	    	$('.home-menu').css("background", "transparent");
	    }else{
	    	$('.home-menu').css("background", "rgba(24,28,29,0.95)");
	    }
  });
	//scroll

	$('.left_nav-menu_list > li:nth-child(2), .drop-big').hover(function(){
		$('.left_nav-menu_list > li:nth-child(2), .drop-big').toggleClass('toggle_drop-big');
	});
	$('.drop-big_menu_list > li').hover(function(){
		$('.drop-big_menu_list > li').removeClass('hover');
		$(this).addClass('hover');
	});


	$('.menu-btn').on('click', function(){
		$(this).toggleClass('close');
		$('.home-menu_left_mobail').toggleClass('toggle_drop-mobail');
	});

	$('.mobail_nav-menu_list .child .child_link').on('click',function(event){
		event.preventDefault();

		var dropLi = $(this).closest('.child').find('.mobail_drop-normal > li'),
			heightLI = $('.mobail_nav-menu_list .mobail_drop-normal > li').height(),
			fontSize = parseInt($('body, html').css('font-size') ),
			allHeight = parseInt(heightLI * dropLi.length + (fontSize * 2) );

			if( $(this).closest('.child').find('.mobail_drop-normal').outerHeight() > 0 ||  $(this).closest('.child').find('.mobail_drop-big').outerHeight() > 0 ){
				$(this).find('i').css('transform','rotate(0deg)');
				$(this).closest('.child').find('.mobail_drop-normal').css({
					'height':0,
					'padding': 0
				});
				$(this).closest('.child').find('.mobail_drop-big').css('height',0);
			} else{
				$(this).find('i').css('transform','rotate(180deg)');
				$(this).closest('.child').find('.mobail_drop-normal').css({
					'height': allHeight + 'px',
					'padding': '1rem 0'
				});
				$(this).closest('.child').find('.mobail_drop-big').css('height',360);
			}

	});

	$('.mobail_drop-big_menu_list > li').on('click',function(){
		$('.mobail_drop-big_menu_list > li').removeClass('mobail-activ');
		$(this).addClass('mobail-activ');
	});

	//menu

	//new-post

		$('#list').on('click',function(){
			$('#new-post').addClass('list');
		});
		$('#th').on('click',function(){
			$('#new-post').removeClass('list');
		});

	//new-post

	function container_for_dots(){

		var newdiv = $('<div>',{
			class: "container"
		});

		$('#home_slider').append(newdiv);

	  var dots = $('.slick-dots');
	  newdiv.append(dots[0]);
	  
	}

	//Slick-slider
	$('#home_slider').slick({
		dots: true,
		swipe: false,
	  slidesToShow: 1,
	  autoplay: true,
		autoplaySpeed: 7000,
	  responsive: [
	    {
	      breakpoint: 1025,
	      settings: {
	        swipe: true,
	      }
	    },
	    {
	      breakpoint: 580,
	      settings: {
	      	swipe: true,
	      	arrows: false
	      }
	    }
	  ]
	});

	container_for_dots();
	if(window.innerWidth > 580){
 		ImagiSlide_for_background("img_slider","home_slider_element","home_slider");
	}

	$('#reason-news_box_article').slick({
		dots: false,
		infinite: false,
		swipe: false,
	  slidesToShow:4,
	  vertical: true
	});

	$('.video-section_slider').slick({
		dots: false,
		infinite: true,
	  slidesToShow:4
	});

	$('.article-post-big_slider').slick({
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		infinite: true,
	  slidesToShow:1
	});

	$('#reason-posts_content_slider').slick({
		fade: false,
		//autoplay: true,
		//autoplaySpeed: 5000,
		dots: true,
		infinite: false,
	  slidesToShow:1,
	  asNavFor: '#reason-posts_content_text'
	});
	$('#reason-posts_content_text').slick({
		asNavFor: '#reason-posts_content_slider',
		fade: true,
		dots: false,
		arrows: false,
		infinite: false,
	  slidesToShow:1
	});

	$('.main_article').masonry({
	  itemSelector: 'article',
	  columnWidth: 245
	});


	Fixsidebar("#sidebar",".category-section_news");

	$(window).scroll(function(){

	 var st = $(this).scrollTop();

	 $('.parallax').css({
	 	'transform': 'translate(0%, ' + st/14 + '%)',
	 });

	});


	// Background Parallax
  var $window = $(window);
  if($('div[data-type="background"]').length){
      $('div[data-type="background"]').each(function(){

          var $obj = $(this);
          var offset = $obj.offset().top;

          $(window).scroll(function()
          {
              offset = $obj.offset().top;

              if ($window.scrollTop() > (offset - window.innerHeight))
              {
                  var yPos = -(($window.scrollTop() - offset) / 8 );
                  var coords = '50% ' + ( yPos ) + 'px';
                  $obj.css({ backgroundPosition:  coords });
              }
          });
          $(window).resize(function()
          {
              offset = $obj.offset().top;
          });
      });
  }



});
