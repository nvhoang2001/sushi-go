const iconList = $(".svg-icon");
const phoneNumberVerifyModal = new bootstrap.Modal("#phoneNumberVeriy");
const signUpSuccessModal = new bootstrap.Modal("#signUpSuccessModal");

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

const phoneNumberVerifyModalEl = document.getElementById("phoneNumberVeriy");

phoneNumberVerifyModalEl.addEventListener("show.bs.modal", () => {
	$("#pincode-input").otpdesigner({
		length: 6,
		onlyNumbers: true,
		inputsClasses: "!tw-w-12",
	});
});

$("#confirm-verify").on("click", function () {
	const result = $("#pincode-input").otpdesigner("code");
	if (result.done) {
		phoneNumberVerifyModal.hide();
		signUpSuccessModal.show();
	}
});
