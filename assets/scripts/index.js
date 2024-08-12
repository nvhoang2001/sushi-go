$("#search").on("click", () => {
	$("#content").addClass("tw-hidden");
	$("#search-area").removeClass("tw-hidden").addClass("tw-flex");
});

$("#search-form .input-group").on("focusin", function () {
	$(this).removeClass("tw-bg-neutral-07");

	$("#search-form .input-group-text").addClass("tw-hidden");
});

$("#search-form .input-group").on("focusout", function () {
	const currentSearch = $(this).find("input")[0].value;

	if (!currentSearch) {
		$(this)
			.addClass(["tw-bg-neutral-07", "tw-border-neutral-07"])
			.removeClass(["tw-border-neutral-04", "tw-bg-white"]);

		$("#search-form .input-group-text").removeClass("tw-hidden");
	} else {
		$(this)
			.addClass(["tw-bg-white", "tw-border-neutral-04"])
			.removeClass(["tw-bg-neutral-07", "tw-border-neutral-07"]);
	}
});

$("#search-form input").on("input", function (event) {
	const currentSearch = event.target.value;

	if (!currentSearch) {
		$("#search-suggest").addClass("tw-hidden");
	} else {
		$("#search-suggest").removeClass("tw-hidden");
	}
});

$("#search-form #search-cancel").on("click", function () {
	$("#content").removeClass("tw-hidden");
	$("#search-area").addClass("tw-hidden");
});

$("#password-visibility-toggle").on("click", () => {
	$("#password").attr("type", (i, type) => {
		return type === "password" ? "text" : "password";
	});
});

const iconList = $(".svg-icon");
for (const icon of iconList) {
	icon.addEventListener("load", () => {
		const svgDoc = icon.contentDocument;
		const attributes = JSON.parse(icon.dataset.attributes) || {};
		for (const tag in attributes) {
			if (Object.prototype.hasOwnProperty.call(attributes, tag)) {
				const attributeList = attributes[tag];
				const tagsEl = svgDoc.querySelectorAll(tag);

				tagsEl.forEach((tagEl) => {
					for (const attribute in attributeList) {
						const value = attributeList[attribute];
						tagEl.setAttribute(
							attribute,
							_.get(tailwind.config.theme.extend.colors, value),
						);
					}
				});
			}
		}
	});
}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = Array.from(popoverTriggerList).map((popoverTriggerEl) => {
	console.log(popoverTriggerEl.dataset);
	const isRawHTMLContentEnable = popoverTriggerEl.dataset.popoverHtml;

	const popoverOptions = { container: "body" };

	if (isRawHTMLContentEnable) {
		const targetId = popoverTriggerEl.dataset.popoverTarget;
		const targetEl = $(`[data-popover-id="${targetId}"]>div`);

		if (targetEl) {
			popoverOptions.html = true;
			popoverOptions.content = targetEl;
			popoverOptions.customClass =
				"tw-max-w-none [&>.popover-arrow]:tw-hidden [&>.popover-body]:tw-p-0 tw-border-0 tw-bg-transparent tw-z-[1021]";
		}
	}

	return new bootstrap.Popover(popoverTriggerEl, popoverOptions);
});

const phoneNumberVerifyModalEl = document.getElementById("user-phone-verify");

phoneNumberVerifyModalEl.addEventListener("show.bs.modal", () => {
	$("#pincode-input").otpdesigner({
		length: 6,
		onlyNumbers: true,
		inputsClasses: "!tw-w-12",
	});
});

$('textarea[data-autogrow="true"]').autogrow();

$("#product-carousel").slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: false,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: true,
				slidesToShow: 5,
				slidesToScroll: 5,
				infinite: false,
			},
			refresh: true,
		},
	],
	prevArrow: "#product-carousel__prev",
	nextArrow: "#product-carousel__next",
	zIndex: 10,
	variableWidth: true,
});
