import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js";

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

const $doc = $(document);
const $box = $(".box");

$doc.ready(() => {
	webEffects();
	renderElements();
});

function renderElements() {
	const soundType = [
		["Sound Waves", "Hair Cells", "Nerve Signals", "Cochlea"],

		[
			"Sound Waves",
			"Hearing Aid - Amplify Sound",
			"Hair Cells",
			"Nerve Signals",
			"Cochlea",
		],

		[
			"Sound Waves",
			"Rondo 3",
			"Cochlear Implant",
			"Electrode Array",
			"Cochlea",
		],
	];

	let i = 0;
	$("#hearing-processes").click(function () {
		console.log("soundType", soundType);
		for (const item of soundType[i++]) {
			console.log(item);
			$(".modal-body").append(
				$("<div>")
					.attr({ class: "container h-100 shadow-sm border border-dark" })
					.append($("<h4>").text([item]).attr({ class: "text-center" }))
			);
		}
	});

	$("#next-diagram").click(() => {
		if (i < soundType.length) {
			$(".modal-body").empty();
			for (const item of soundType[i++]) {
				console.log(item);
				$(".modal-body").append(
					$("<div>")
						.attr({ class: "container h-100 shadow-sm border border-dark" })
						.append($("<h4>").text([item]).attr({ class: "text-center" }))
				);
			}
		}
	});

	$("#close").click(() => {
		i = 0;
		$(".modal-body").empty();
	});
}

function webEffects() {
	$(".card").on("mouseenter mouseleave", function (event) {
		const $image = $(this).find("img");
		if (event.type === "mouseenter") {
			$image.css("border", "4px solid var(--primary)");
		} else {
			$image.css("border", "none");
		}
	});
	// $box.click(function () {
	// 	anime({
	// 		targets: ".box",
	// 		translateX: [35, -35, 0],
	// 		duration: 2200,
	// 		easing: "easeInOutQuad",
	// 	});
	// });
}
