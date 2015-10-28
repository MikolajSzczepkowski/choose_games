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
		$("#friends").toggle( "slide", { 
			direction: "right", 
			easing: "easeInOutBack" 
		},700);
	});

	$(".game-image").on("mouseenter", function(){
		$(this).prepend("<div class='game-image-hover'></div>");
		$(".game-image-hover").append("<p class='text-center text-uppercase game-hover-players'></p>");
		$(".game-image-hover").append("<p class='text-center text-uppercase game-hover-info'></p>");
		$(".game-image-hover").append("<p class='text-center text-uppercase game-hover-fee'></p>");
		$(".game-hover-players").html("players<br>24/64");
		$(".game-hover-info").html("Registartion ends<br> 28.10.2015");
		$(".game-hover-fee").html("678$");
		
	});
	$(".game-image").on("mouseleave", function(){
		$(".game-image-hover").remove();
	});
});