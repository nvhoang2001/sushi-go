const iconList = $(".svg-icon");

iconList.on("load", () => {
	for (let dataEl of iconList) {
		const svgDoc = dataEl.contentDocument;
		const attributes = JSON.parse(dataEl.dataset.attributes) || {};
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
	}
});

$("#go-back").on("click", () => {
	window.history.go(-1);
});

$("#password-visibility-toggle").on("click", () => {
	$("#password").attr("type", (i, type) => {
		return type === "password" ? "text" : "password";
	});
});
