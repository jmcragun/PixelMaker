$(document).ready(function () {
	$(".canvas").click(function () {
		var color = $("#colorval").val();
		$(this).css("background-color", color);
	});
});