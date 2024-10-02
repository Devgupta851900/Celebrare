const signUpButton = document.querySelector(".button");
const buttonContent = document.querySelector(".buttonContent");
const spinner = document.querySelector("[spinner]");
const buttonText = document.querySelector("[buttonText]");
const toBeFaded = document.querySelectorAll(".toFade");
const logo = document.querySelector(".logo");
const rightImage = document.querySelector(".rightImage");
const logoBg = document.querySelector(".logoBg");
const landingImage = document.querySelector(".landingImage");
const landingPage = document.querySelector(".landingPage");
const landingLogo = document.querySelector(".logoBg");
const fields = document.querySelectorAll(".field input");
const fieldLabels = document.querySelectorAll(".field label");

[...toBeFaded, rightImage, logo].forEach((item) => {
	item.addEventListener("animationend", (e) => {
		if (e.animationName !== "field") {
			item.style.display = "none";
		}
	});
});

signUpButton.addEventListener("animationend", (e) => {
	if (e.animationName === "buttonFadeAway") {
		signUpButton.style.display = "none";
	}
});

signUpButton.addEventListener("click", (e) => {
	e.preventDefault();

	buttonContent.classList.add("buttonContentSlide");
	buttonText.style.margin = "0 0 0 2rem";

	setTimeout(() => {
		buttonContent.classList.remove("buttonContentSlide");
		buttonText.textContent = "";
		spinner.classList.remove("spinner-position");
	}, 1000);

	setTimeout(() => {
		toBeFaded.forEach((item) => {
			item.classList.add("dropTobottomAnimation");
		});

		logo.classList.add("logoMoveRotateAndScale");
		signUpButton.classList.add("buttonFadeAway");
	}, 2000);

	setTimeout(() => {
		rightImage.classList.add("rightImageAnimate");
	}, 2100);

	setTimeout(() => {
		landingPage.style.display = "flex";
		landingImage.classList.add("landingImageScaleUp");
		landingLogo.classList.add("landingLogoScaleUp");
	}, 4100);

	setTimeout(() => {
		landingImage.classList.remove("landingImageScaleUp");
		landingLogo.classList.remove("landingLogoScaleUp");

		landingPage.style.display = "none";
	}, 6100);

	setTimeout(() => {
		logo.classList.remove("logoMoveRotateAndScale");
		signUpButton.classList.remove("buttonFadeAway");
		rightImage.classList.remove("rightImageAnimate");
		[...toBeFaded, rightImage, signUpButton, logo].forEach((item) => {
			item.classList.remove("dropTobottomAnimation");
			item.style.display = "flex";
		});
		buttonText.textContent = "Sign In";
		spinner.classList.add("spinner-position");
		buttonContent.classList.add("buttonTextSlideOutReverse");
	}, 6200);
});

fields.forEach((field, index) => {
	field.addEventListener("click", () => {
		field.placeholder = "";
		const fieldLabel = fieldLabels[index];
		fieldLabel.style.display = "block";
		fieldLabel.classList.add("fieldAnimate");

		setTimeout(() => {
			fieldLabel.classList.add("labelPosition");
		}, 500);
	});
});
