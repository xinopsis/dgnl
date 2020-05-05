(function($) {
	function scrollHeader(){
	 var altoHeader=$(".navigation").outerHeight() ;

	 var y = document.body.scrollTop, y2= document.documentElement.scrollTop;
	 if(y> altoHeader || y2 >altoHeader){
	 	document.body.classList.add("activeHeader");
	 }else{
		document.body.classList.remove("activeHeader");
	 }

	} 
	 scrollHeader();
	 window.addEventListener('scroll', function() {
	  // var y = document.body.scrollTop, y2= document.documentElement.scrollTop;
	  scrollHeader();
	});

	 $(".navigation ul a").on("click",function(e){
		e.preventDefault();
		var h=$(this).attr("href"), w=$(window).width();
		$(".section,.navigation a").removeClass("active");
		$(this).addClass("active");	 
		var topnav=$(h).offset().top;
		$("html, body").animate({ scrollTop: topnav }, 600);

		if(w<960){
			$(h).addClass("active");
			$("#main").removeClass();
			$("#main").addClass("ev");
			$("#secciones").removeClass();
			$(".navigation ul").slideToggle();
		}

		
	});
	 $(".list-team li").on("click",function(){
		$(".list-team li").removeClass("active");
		$(this).addClass("active");
		
	})
	 $(".btn-mobile").on("click",function(){
	 	$(".navigation ul").slideToggle();
	 });
	$(window).on("load",function(){

	 	 var v= $(".imageGallery");
		 if(v.length){
			 v.lightSlider({
		        adaptiveHeight:true,
		        item:1,
		        slideMargin:0,
		        loop:true,
		        onSliderLoad: function(el) {

	                el.lightGallery({
	                    selector:' .imageGallery .lslide'
	                });
	            }
		    });
		}

	});
}(jQuery));