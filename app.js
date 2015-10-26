$(function (){
	var gameImageHeight = $("#gameImage").height();

	$(".decoration-bar").css("height", gameImageHeight);
	
	$(window).resize(function(){
		gameImageHeight = $("#gameImage").height();
		$(".decoration-bar").css("height", gameImageHeight);
	});
});