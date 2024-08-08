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
