let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let theme = document.querySelector(".js-lightTheme");
let themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    body.classList.toggle("js-lightTheme");

    themeName.innerText = body.classList.contains("js-lightTheme") ? "ciemny" : "jasny";

})