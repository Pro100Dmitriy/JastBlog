function ImagiSlide_for_background(a, b, c){

	var slickArrow = document.getElementsByClassName("slick-arrow");

	for(var i = 0; i < slickArrow.length; i++){

		var classForDivImage = document.createElement("div");
		classForDivImage.className = a;
		slickArrow[i].appendChild(classForDivImage);

	}

	var activelem = document.getElementsByClassName(b + " slick-current slick-active"),
			current = parseInt( activelem[0].getAttribute("data-slick-index") );

	var prevelem = document.querySelectorAll("." + b + "[data-slick-index='"+ (current-1) +"']");
			prevstyle = prevelem[0].getAttribute("style");
	var arrPrevStyle = prevstyle.split('"');
	var	imgprev = document.createElement("img");
			imgprev.setAttribute("src",arrPrevStyle[1]);
			imgprev.setAttribute("width","250px");


	var nextelem = document.querySelectorAll("." + b + "[data-slick-index='"+ (current+1) +"']");
			nextstyle = nextelem[0].getAttribute("style");
	var arrNextStyle = nextstyle.split('"');
	var	imgnext = document.createElement("img");
			imgnext.setAttribute("src",arrNextStyle[1]);
			imgnext.setAttribute("width","250px");

	var slick = document.getElementsByClassName(a);
			
			slick[0].appendChild(imgprev);
			slick[1].appendChild(imgnext);

var slick_prev = document.querySelectorAll("."+ c +" .slick-prev"),
		slick_next = document.querySelectorAll("."+ c +" .slick-next"),
		slick_dots = document.querySelectorAll("."+ c +" .slick-dots");

slick_prev[0].addEventListener('click', replaceimg);
slick_next[0].addEventListener('click', replaceimg);
slick_dots[0].addEventListener('click', replaceimg);

function replaceimg(){

	var activelem = document.getElementsByClassName(b + " slick-current slick-active"),
			current = parseInt( activelem[0].getAttribute("data-slick-index") );	

			var prevelem = document.querySelectorAll("." + b + "[data-slick-index='"+ (current-1) +"']");
			prevstyle = prevelem[0].getAttribute("style");
	var arrPrevStyle = prevstyle.split('"');
	var	imgprev = document.createElement("img");
			imgprev.setAttribute("src",arrPrevStyle[1]);
			imgprev.setAttribute("width","250px");


	var nextelem = document.querySelectorAll("." + b + "[data-slick-index='"+ (current+1) +"']");
			nextstyle = nextelem[0].getAttribute("style");
	var arrNextStyle = nextstyle.split('"');
	var	imgnext = document.createElement("img");
			imgnext.setAttribute("src",arrNextStyle[1]);
			imgnext.setAttribute("width","250px");

	var slick = document.getElementsByClassName(a);

	if(slick[0].childNodes[0] === slick[0].firstChild){

		slick[0].removeChild(slick[0].firstChild);
		slick[0].appendChild(imgprev);

	}

	if(slick[1].childNodes[0] === slick[1].firstChild){

		slick[1].removeChild(slick[1].firstChild);
		slick[1].appendChild(imgnext);

	}


}


}