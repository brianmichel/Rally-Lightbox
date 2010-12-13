if (window.top === window) {
   // The parent frame is the top-level frame, not an iframe.
   // All non-iframe code goes before the closing brace.
	console.log('STARTED SCRIPT!');
	//$(".dt-tbl a > img").addClass('red');
	$(".dt-tbl tr:contains('Attachments:') td > a").fancybox();
	$(".dt-tbl tr:contains('Attachments:') td > a").attr("rel", "gallery");
}