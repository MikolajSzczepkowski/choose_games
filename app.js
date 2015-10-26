$(function (){
	var gameImageHeight = $("#gameImage").height(),
		width = $(document).width() - 2;

	$(".decoration-bar").css("height", gameImageHeight);
	
	$(window).resize(function(){
		gameImageHeight = $("#gameImage").height();
		width = $(document).width() - 2;
		$(".decoration-bar").css("height", gameImageHeight);
	});

	$("#chat").on("click", function(){
		$("#friends").slideToggle(1000);
	});
});