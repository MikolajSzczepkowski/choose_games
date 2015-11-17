$(function (){
	$(".game-image").on("mouseenter", function(){
		$(this).prepend("<div class='game-image-hover'></div>");
		$(".game-image-hover").append("<p class='text-center text-uppercase game-hover-players'></p>");
		$(".game-image-hover").append("<p class='text-center text-uppercase game-hover-info'></p>");
		$(".game-image-hover").append("<p class='text-center text-uppercase game-hover-fee'></p>");
		$(".game-hover-players").html("players<br>24/64");
		$(".game-hover-info").html("Registration ends<br> 28.10.2015");
		$(".game-hover-fee").html("678$");	
	});
	$(".game-image").on("mouseleave", function(){
		$(".game-image-hover").remove();
	});
});