{
    const welcome = () => {
        console.log("Welcome on my first webside");
    }

    const onChangeBackGroundClick = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");
        body.classList.toggle("js-lightTheme");
        themeName.innerText = body.classList.contains("js-lightTheme") ? "ciemny" : "jasny";
    }

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", onChangeBackGroundClick);
        
        welcome();
    }

    init();
}