import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js";

const $doc = $(document);
$doc.ready(() => {
	teamEffects();
	renderDiagram();
	createButton();
	returnHome();
});

function teamEffects() {
	$(".card").on("mouseenter mouseleave", function (event) {
		const $image = $(this).find("img");
		if (event.type === "mouseenter") {
			$image.css("border", "4px solid var(--primary)");
		} else {
			$image.css("border", "none");
		}
	});

	const socialIcons = [
		"./images/linkedin_icon.png",
		"./images/gmail_icon.png",
		"./images/github_icon.png",
		"./images/instagram_icon.png",
	];

	const person = $("#meet-the-team").find(".col");

	person.click(function () {
		$(".card-body").append($("<div>").attr({ id: `social` }));
		for (const item of socialIcons) {
			console.log(item);
			$("#social").append($("<img>").attr({ src: `${item}` }));
		}
	});
}

function createButton() {
	$("body").append(
		$("<button>")
			.attr({ id: "homeButton" })
			.addClass("rounded-circle")
			.append($("<span>"))
			.css("zIndex", 10)
			.append(
				$("<span>")
					.attr({ class: "material-symbols-outlined" })
					.text("arrow_upward")
			)
	);
}

function returnHome() {
	const buttonShow = 300;
	const button = $("#homeButton");

	$(window).scroll(() => {
		const currentLocation = $(window).scrollTop();

		if (currentLocation > buttonShow) button.addClass("show");
		else button.removeClass("show");
	});

	button.click(() => {
		button.removeClass("show");
		$("html, body").animate({ scrollTop: 0 }, 200);
	});
}

function renderDiagram() {
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
		for (const item of soundType[i]) {
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

			anime({
				targets: `#modal-diagram-${i}-${j}`,
				translateY: [0, -36 + j * 38],
				duration: 1800,
				easing: "easeInOutQuad",
			});
		}
	});

	$("#next-diagram").click(() => {
		j = 0;
		if (i < soundType.length - 1) {
			i++;
			$("#diagram").empty();
			for (const item of soundType[i]) {
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
		}
	});

	$("#previous-diagram").click(() => {
		j = 0;
		if (i > 0) {
			i--;
			$("#diagram").empty();
			for (const item of soundType[i]) {
				++j;
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
		}
	});

	$(".btn-close").click(() => {
		i = 0;
		j = 0;
		$("#diagram").empty();
	});
}
