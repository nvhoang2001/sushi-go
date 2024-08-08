const userInfoModal = new bootstrap.Modal("#user-info-modal");
const userAddressModal = new bootstrap.Modal("#user-address-modal");
const userOrderHistoryListModal = new bootstrap.Modal("#user-order-history-modal");
const userOrderDetailModal = new bootstrap.Modal("#user-order-detail-modal");

const userInfo = localStorage.getItem("user-info") || "";

$("#menu").on("click", function (event) {
	const selectedOption = event.target.closest("li");
	if (!selectedOption) {
		return;
	}

	switch (selectedOption.dataset.item) {
		case "profile-info":
			userInfoModal.show();
			break;
		case "user-address":
			userAddressModal.show();
			break;
		case "order-history":
			userOrderHistoryListModal.show();
			break;

		default:
			break;
	}
});

$("#go-back").on("click", () => {
	window.history.go(-1);
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

const myModal = new bootstrap.Modal(document.getElementById("user-phone-verify"));
function openNestedModal() {
	myModal.show();
}

$("#confirm-verify").on("click", () => {
	myModal.hide();
});
