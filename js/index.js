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

$doc.ready(() => {
	renderElements();
	webEffects();
});

function renderElements() {
	const soundType = [
		["Sound Waves", "Hair Cells", "Nerve Signals", "Cochlea"],

		["Sound Waves", "Aid Amplifies", "Hair Cells", "Nerve Signals", "Cochlea"],

		[
			"Sound Waves",
			"Rondo 3",
			"Cochlear Implant",
			"Electrode Array",
			"Cochlea",
		],
	];

	const soundLabel = ["Normal Hearing", "Hearing Aid", "Cochlear Implant"];

	let i = 0;
	let j = 0;
	$("#hearing-processes").click(function () {
		console.log("soundType", soundType);
		for (const item of soundType[i]) {
			++j;
			console.log(item);
			$("#diagram").append(
				$("<div>")
					.attr({
						class:
							"container shadow-sm border border-dark position-absolute top-0 start-0",
					})
					.attr({ id: `modal-diagram-${i}-${j}` })
					.css("z-index", soundType.length * 2 - j)
					.css({ backgroundColor: "var(--off-white)" })
					.append($("<h4>").text([item]).attr({ class: "text-center" }))
			);

			$(".modal-title").text(`${soundLabel[i]}`);
			anime({
				targets: `#modal-diagram-${i}-${j}`,
				translateY: [0, -36 + j * 38],
				duration: 1800,
				easing: "easeInOutQuad",
			});
		}

		console.log(i);
	});

	$("#next-diagram").click(() => {
		j = 0;
		if (i < soundType.length - 1) {
			i++;
			$("#diagram").empty();
			for (const item of soundType[i]) {
				console.log(item);
				++j;
				$("#diagram").append(
					$("<div>")
						.attr({
							class:
								"container shadow-sm border border-dark position-absolute top-0 start-0",
						})
						.attr({ id: `modal-diagram-${i}-${j}` })
						.css("z-index", soundType.length * 2 - j)
						.css({ backgroundColor: "var(--off-white)" })
						.append($("<h4>").text([item]).attr({ class: "text-center" }))
				);

				$(".modal-title").text(`${soundLabel[i]}`);

				$(".modal-title").text(`${soundLabel[i]}`);
				anime({
					targets: `#modal-diagram-${i}-${j}`,
					translateY: [0, -36 + j * 38],
					duration: 1800,
					easing: "easeInOutQuad",
				});
			}
			console.log(i);
		}
	});

	$("#previous-diagram").click(() => {
		j = 0;
		if (i > 0) {
			i--;
			$("#diagram").empty();
			for (const item of soundType[i]) {
				++j;
				console.log(item);
				$("#diagram").append(
					$("<div>")
						.attr({
							class:
								"container  shadow-sm border border-dark position-absolute top-0 start-0",
						})
						.attr({ id: `modal-diagram-${i}-${j}` })
						.css("z-index", soundType.length * 2 - j)
						.css({ backgroundColor: "var(--off-white)" })
						.append($("<h4>").text([item]).attr({ class: "text-center" }))
				);

				$(".modal-title").text(`${soundLabel[i]}`);

				anime({
					targets: `#modal-diagram-${i}-${j}`,
					translateY: [0, -36 + j * 38],
					duration: 1800,
					easing: "easeInOutQuad",
				});
			}
			console.log(i);
		}
	});

	$(".btn-close").click(() => {
		i = 0;
		j = 0;
		$("#diagram").empty();
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
}
