{
    const welcome = () => {
        console.log("Welcome on my first webside");
    }

    const onChangeBackGroundClick = () => {
        body.classList.toggle("js-lightTheme");
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        themeName.innerText = body.classList.contains("js-lightTheme") ? "ciemny" : "jasny";
    }

    const init = () => {
        button.addEventListener("click", onChangeBackGroundClick);
        const button = document.querySelector(".js-button");
        welcome();
    }

    init();
}