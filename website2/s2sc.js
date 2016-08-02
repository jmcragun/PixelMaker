$(document).ready(function () {
	for (var i =  0; i < 2500; i++) {
		$(".container").append("<div class=\"canvas\"></div>");
	}
	$(".canvas").click(function () {
		var color = $("#colorval").val();
		$(this).css("background-color", color);
	});
	$(document).on("dblclick", ".canvas", function () {
		$(this).css("background-color", "white");
	});
	$("#clearAll").click(function () {
		$(".canvas").css("background-color", "white");
	});
});