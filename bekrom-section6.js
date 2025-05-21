const formOpen = document.querySelector(".contact-form"),
	formCloseBtn = document.querySelector(".contact-form-close"),
	formOpenBtn = document.querySelector(".contact-form-open");

formOpenBtn.addEventListener("click", () => {
    formOpen.style.height="100vh";
});

formCloseBtn.addEventListener("click", () => {
    formOpen.style.height="0vh";
});