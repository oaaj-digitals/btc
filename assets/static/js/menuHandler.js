let menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", () => {
	let ele1 = document.querySelector(".nav-bar");
	let ele2 = document.querySelector(".login-user__div");
	let hiddenElements = [ele1, ele2];

	menuHandler(menuBtn, hiddenElements);
});

let menuHandler = (menuBtn, hiddenElements) => {
	if (menuBtn.classList.contains("opened")) {
		close(menuBtn, hiddenElements);
	} else {
		open(menuBtn, hiddenElements);
	}
};

let close = (menuBtn, hiddenElements) => {
	menuBtn.classList.remove("opened");
	menuBtn.classList.add("closed");

	hiddenElements.forEach((hiddenElement) => {
		hiddenElement.style.display = "none";
	});

	let body = document.querySelector("body");
	body.style.overflow = "visible";
};

let open = (menuBtn, hiddenElements) => {
	menuBtn.classList.add("opened");
	menuBtn.classList.remove("closed");

	hiddenElements.forEach((hiddenElement) => {
		hiddenElement.style.display = "flex";
	});

	let body = document.querySelector("body");
	body.style.overflow = "hidden";
};
