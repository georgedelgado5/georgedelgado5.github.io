$(document).ready(() => {
	$(".card").on("mouseenter mouseleave", function (event) {
		const $image = $(this).find("img");
		if (event.type === "mouseenter") {
			$image.css("border", "4px solid var(--primary)");
		} else {
			$image.css("border", "none");
		}
	});
});
