
$("a").click(function(e) {

	var position = $($(this).attr("href")).offset().top - 70;

	$("body, html").animate({
		scrollTop: position
	}, 600 /* speed */ );
});