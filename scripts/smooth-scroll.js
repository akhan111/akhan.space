
$("a").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top - 50;

	$("body, html").animate({
		scrollTop: position
	}, 400 /* speed */ );
});