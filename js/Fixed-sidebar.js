function Fixsidebar(sidebar, article){

	var bar = document.querySelector(sidebar),
			div = null,
			K = null,
			Z = 0, 
	    P = 0, 
	    N = 0;		

	window.addEventListener('scroll', fixedscroll);

	function fixedscroll(){
		var Barcoordinates = bar.getBoundingClientRect();
				Bottomarticle = document.querySelector(article).getBoundingClientRect().bottom;

		if(div == null){
			var StyleBar = getComputedStyle(bar, ''),
      		style = '';

      for(var i = 0; i < StyleBar.length; i++){
      	if(StyleBar[i].indexOf('overflow') == 0 || StyleBar[i].indexOf('padding') == 0 || StyleBar[i].indexOf('border') == 0 || StyleBar[i].indexOf('outline') == 0 || StyleBar[i].indexOf('box-shadow') == 0 || StyleBar[i].indexOf('background') == 0){
      		style += StyleBar[i] + ':' + StyleBar.getPropertyValue(StyleBar[i]) + ';'
      	}
      }
      //create div
      div = document.createElement('div');
      div.style.cssText = style + 'box-sizing: border-box; width: ' + bar.offsetWidth + 'px;';
      bar.insertBefore(div, bar.firstChild);

      var elemchild = bar.childNodes.length;
      for(var i = 1; i < elemchild; i++){
      	div.appendChild(bar.childNodes[1]);
      }

      bar.style.height = div.getBoundingClientRect().height + 'px';
      bar.style.padding = '0';
      bar.style.border = '0';
		}

		var Divcoordinates = div.getBoundingClientRect(),
				Divheight = Barcoordinates.top + Divcoordinates.height,
				winWidth = document.documentElement.clientHeight,
				R1 = Math.round(Divheight - Bottomarticle),
				R2 = Math.round(Divheight - winWidth);

				if(Divcoordinates.height > winWidth){
					if(Barcoordinates.top < K){
						if(R2 + N > R1){
							if(Divcoordinates.bottom - winWidth + N <=0){
								div.className = 'sticky';
								div.style.top = winWidth - Divcoordinates.height - N + 'px';
								Z = N + Barcoordinates.top + Divcoordinates.height - winWidth;
							}else{
								div.className = 'stop';
								div.style.top = -Z + 'px';
							}
						}else{
							 	div.className = 'stop';
			          div.style.top = - R1 +'px';
			          Z = R1;
						}
					}else{
						if(Barcoordinates.top - P < 0){
							if(Divcoordinates.top - P >= 0){
								div.className = 'sticky';
								div.style.top = P + 'px';
								Z = Barcoordinates.top - P;
							}else{
								div.className = 'stop';
								div.style.top = -Z + 'px';
							}
						}else{
							div.className = '';
		          div.style.top = '';
		          Z = 0;
						}
					}
					K = Barcoordinates.top;
				}else{
					if((Barcoordinates.top - P) <= 0){
						if((Barcoordinates.top - P) <= R1){
							div.className = 'stop';
							div.style.top = -R1 + 'px';
						}else{
							div.className = 'sticky';
							div.style.top = P + 'px';
						}
					}else{
						div.className = '';
		        div.style.top = '';
					}
				}

			window.addEventListener('resize', function() {
		    //bar.children[0].style.width = getComputedStyle(a, '').width
		  }, false);

	}

}