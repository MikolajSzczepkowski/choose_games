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

	$("#latestMatches li:lt(3)").show();
	$(document).on("click", "#showMoreMatches", function(){
		$("#latestMatches li").show();
		$(this).text("hide");
		$(this).attr("id", "hideMatches");
	});
	$(document).on("click", "#hideMatches", function(){
		$("#latestMatches li").hide();
		$("#latestMatches li:lt(3)").show();
		$(this).text("show more");
		$(this).attr("id", "showMoreMatches");
	});
});