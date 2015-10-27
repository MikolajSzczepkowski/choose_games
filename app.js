$(function (){
	var gameImageHeight = $("#gameImage").height(),
		width = $(document).width() - 2,
		friendsHeight = $("#friends").height() + 10 +"px"
		toggleCounter = 0;

	$(".decoration-bar").css("height", gameImageHeight);
	
	$(window).resize(function(){
		gameImageHeight = $("#gameImage").height();
		width = $(document).width() - 2;
		$(".decoration-bar").css("height", gameImageHeight);
	});

	$("#chat").on("click", function(){
		width = $(document).width() - 2;
		if(width <= 768){
			if(toggleCounter%2 === 0){
				$(".main").animate({paddingTop: friendsHeight});
			}
			else{
				$(".main").animate({paddingTop: "0px"});
			}
			toggleCounter ++;
		}
		$("#friends").toggle( "slide", { direction: "right", 
											easing: "easeInOutBack" },800);
	});
});