$(function (){
	var gameImageHeight = $(".game-image").height(),
		width = $(window).width(),
		friendsHeight = $("#friends").height() + 10 +"px",
		toggleCounter = 0;

	$(".decoration-bar").css("height", gameImageHeight);
	
	$(window).resize(function(){
		gameImageHeight = $(".game-image").height();
		width = $(window).width();
		$(".decoration-bar").css("height", gameImageHeight);
	});

	$("#chat").on("click", function(){
		width = $(window).width(),
		friendsHeight = $("#friends").height() + 10 +"px";
		if(width <= 990){
			if(toggleCounter%2 === 0){
				$(".main").animate({paddingTop: friendsHeight});
			}
			else{
				$(".main").animate({paddingTop: "0px"});
			}
		}
		$("#friends").toggle( "slide", { 
			direction: "right", 
			easing: "easeInOutBack" 
		},800);
		toggleCounter ++;
	});
});