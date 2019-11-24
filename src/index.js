require("normalize.css/normalize.css");
require("./styles/index.scss");

document.addEventListener("DOMContentLoaded", () => {
    var plusButton = document.querySelector(".btn-wrapper");
    var imgInfo = document.querySelector(".img-info");
    var closeButton = document.querySelector(".img-info__close-btn");
    // after clicking, turn on img-info
    plusButton.addEventListener("click", function() {
        // add class name "img-info--active" to imgInfo
        imgInfo.classList.add("img-info--active");
    });

    // after clicking, turn off img-info
    closeButton.addEventListener("click", function() {
        // remove class name "img-info--active" to imgInfo
        imgInfo.classList.remove("img-info--active");
    });
});
