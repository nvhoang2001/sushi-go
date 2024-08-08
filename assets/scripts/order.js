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

$("#go-back").on("click", () => {
	window.history.go(-1);
});

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = Array.from(popoverTriggerList).map((popoverTriggerEl) => {
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
