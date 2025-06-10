import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js";

//used to add border around team members
function hoverHighlight() {
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
}
hoverHighlight();

const url = "https://www.medel.com/en-us/digital-showroom#rondo3";

//need to finish function
//Goal is to prevent redirecting to new page if link is broken
function fetchData(url) {
	fetch(url)
		.then((response) => {
			console.log("Got data!");
		})
		.catch((error) => {
			console.log("Unable to get URL.");
		});
}

//just testing using animejs - very fun
function animateSlides() {
	window.addEventListener("click", () => {
		anime({
			targets: ".box",
			translateX: [90, -90, 0],
			duration: 3600,
			easing: "easeInOutQuad",
		});
	});
}

animateSlides();
