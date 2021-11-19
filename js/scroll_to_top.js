document.addEventListener("scroll", handleScroll);
// get a reference to our predefined button
var button = document.querySelector(".scroll-to-top");

function handleScroll() {
    var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var GOLDEN_RATIO = 0.5;

    if (document.documentElement.scrollTop / scrollableHeight > GOLDEN_RATIO) {
        //show button
        if (!button.classList.contains("show-scroll-to-top")) button.classList.add("show-scroll-to-top");
    } else {
        //hide button
        if (button.classList.contains("show-scroll-to-top")) button.classList.remove("show-scroll-to-top");
    }
}

button.addEventListener("click", scrollToTop);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
