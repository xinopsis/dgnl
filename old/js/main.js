$(".navigation a").on("click",function(e){
	e.preventDefault();
	var h=$(this).attr("href"), w=$(window).width();;
	$(".section,.navigation a").removeClass("active");
	$(this).addClass("active");
	 
	if(w<960){
		var topnav=$(h).offset().top;
		$("html, body").animate({ scrollTop: topnav }, 600);
	}

	$(h).addClass("active");
	$("#main").removeClass();
	$("#main").addClass("ev");
	$("#secciones").removeClass();
	
	switch(h){
		case "#about":$("#secciones").addClass("ev1"); break;
		case "#team":$("#secciones").addClass("ev2");$("#main").addClass("team"); break;
		case "#proyectos":$("#secciones").addClass("ev3");$("#main").addClass("poyecto"); break;
		case "#contacto":$("#secciones").addClass("ev4");$("#main").addClass("contacto"); break;
	}


	/**default proyectos **/
	$(".detcontent").removeClass("active");
	$("a.default").trigger("click");
	$("#projects").removeClass();
	$("#projects > div").removeClass("active");
});
var vid = document.getElementById("myVideo"); 
$(document).on("click",".evntmodal",function(){
	$(".bgmodal").toggleClass("active");
	vid.play(); 
	 setTimeout(function(){
		 	$(".lg-close").trigger("click");
		 }, 300);
	
})
$(document).on("click",".closemv",function(){
	$(".bgmodal").toggleClass("active");
	vid.pause(); 
	vid.currentTime = 0;
})

$(".homelink").on("click",function(){
	$(".section").removeClass("active");
	$("#main").removeClass();
	$("#secciones").removeClass();
	$(".section,.navigation a").removeClass("active");
})
$(".list-team li").on("click",function(){
	$(".list-team li").removeClass("active");
	$(this).addClass("active");
})

$("#projects > div").on("click",function(){
	$("#projects > div").removeClass("active");
	 var w=$(window).width();
	
	if(w<960){
		 setTimeout(function(){
		 	var top=$(".detcontent").offset().top;
		 	$("html, body").animate({ scrollTop: top }, 600);
		 }, 100);
		
	}
	$(this).addClass("active");
	if($(this).hasClass("proyecto1")){
		$(this).parent().removeClass();
		$(this).parent().addClass("proy1");
		$(".info-left-det").removeClass("bg2");
		$(".info-left-det").removeClass("bg3");
	}else if($(this).hasClass("proyecto2")){
		$(this).parent().removeClass();
		$(this).parent().addClass("proy2");
		$(".info-left-det").removeClass("bg3");
		$(".info-left-det").addClass("bg2");

	}else if($(this).hasClass("proyecto3")){
		$(this).parent().removeClass();
		$(this).parent().addClass("proy3");
		$(".info-left-det").removeClass("bg2");
		$(".info-left-det").addClass("bg3");
	}
	var t = $(this).attr("data-active");
	if(t != " " ){
		$(t).addClass("active");
		$(t+" .subproyecto").show();
		if(!$(t+" .imageGallery").hasClass("loaded")){
	        $(t+" .imageGallery").lightSlider({
	            gallery:true,
	            item:1,
	            loop:true,
	            controls:true,
	            pager:true,
	            thumbItem:2,
	            slideMargin:0,
	            enableDrag: true,
	            enableTouch: true,
	            currentPagerPosition:'left',
	            onSliderLoad: function(el) {
	            	var text=$(t+" li.active").attr("data-text");
		            $(t+' .edittext').text(text);
	            	 $(t+" .imageGallery").addClass("loaded");
	                el.lightGallery({
	                    selector: t +' .imageGallery .lslide'
	                });
	            }, onAfterSlide: function (el) {
	            	var text=$(t+" li.active").attr("data-text");
		            $(t+' .edittext').text(text);
		        } 
	        });  
        }
	}
});

$(".itemproyecto").on("click",function(){
	$(".detcontent").addClass("active");
	var el=$(this);
	$(".detalle-info,.imgdet-proyecto").removeClass("active");
	if(el.hasClass("proyecto1")){
		$(".proyecto1det").addClass("active");
	}else if(el.hasClass("proyecto2")){
		$(".proyecto2det").addClass("active");
	}else if(el.hasClass("proyecto3")){

		$(".proyecto3det").addClass("active");
	}
});

$(".dualbtns > a").on("click",function(e){
	e.preventDefault();
	var l=$(this), w=$(window).width();
	// var txtbtn=l.text();
	// $("#subproyecto").text(txtbtn);
	$(".infosubproyecto").addClass("active");
	var data=l.attr("data-carusel");
	$(".dualbtns > a").removeClass("active");
	l.addClass("active");
	if(w<960){
		$(".imgdet-proyecto.active  .figureimg").hide();
	 }
	if($(this).hasClass("info1det")){
		
		$(".infodet > *").hide();
		$(".infodet > .det1").fadeIn();

		// l.parent().removeClass("activedet2");
		// l.parent().addClass("activedet1");
		$(".subproyecto2").hide();
		$(".subproyecto1").fadeIn("1000");


	}else if($(this).hasClass("info2det")){
		$(".infodet > *").hide();
		$(".infodet > .det2").fadeIn();
		// l.parent().removeClass("activedet1");
		// l.parent().addClass("activedet2");
		$(".subproyecto1").hide();
		$(".subproyecto2").fadeIn("1000");
		
	}
	else if($(this).hasClass("default")){

		$(".infodet > *").hide();
		// l.parent().removeClass("activedet1").removeClass("activedet2");
		$(".infodet > .detprincipal").fadeIn();
		$("#subproyecto").text(" ");
		$(".infosubproyecto").removeClass("active");
		$(".infosubproyecto >*").hide();
		if(w<960){
			$(".figureimg").show();
		}
	}

	if(!$(data + " .imageGallery").hasClass("loaded")){
        $(data + " .imageGallery").lightSlider({
            gallery:true,
            item:1,
            loop:true,
            controls:true,
            pager:true,
            thumbItem:2,
            slideMargin:0,
            enableDrag: true,
            enableTouch: true,
            currentPagerPosition:'left',
            onSliderLoad: function(el) {
            	$(data + " .imageGallery").addClass("loaded");
            	var text=$(data+" li.active").attr("data-text");
	            $(data+' .edittext').text(text);
                el.lightGallery({
                    selector: data +' .imageGallery .lslide'
                });
            }, onAfterSlide: function (el) {
            	var text=$(data+" li.active").attr("data-text");
	            $(data+' .edittext').text(text);
	        } 
        });  
    }


});
$(".close").on("click",function(){
	$(".detcontent").removeClass("active");
	$("a.default").trigger("click");
	$("#projects").removeClass();
	$("#projects > div").removeClass("active");
})