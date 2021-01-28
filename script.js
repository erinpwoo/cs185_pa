var modal = document.getElementById("modal-window")
var img = document.getElementById("modal-img")
var scrollToTopButton = document.getElementById("scrollToTopBtn");
var root = document.documentElement;

function openModal(source) {
    modal.style.visibility = "visible";
    img.src = source.src;
    img.style.opacity = "100%"
    modal.addEventListener("click", function(event) {
        if (event.target.id == "modal-window") {
            if (img.tagName == "VIDEO") {
                img.pause();
            }
            modal.style.visibility = "hidden";
        }
    });
}

document.addEventListener("scroll", () => {
    var scroll = root.scrollHeight - root.clientHeight;
    if ((root.scrollTop / scroll) >= .25) {
        // show scroll to top here
        scrollToTopButton.classList.add("showButton");
    } else {
        scrollToTopButton.classList.remove("showButton");
    }
});

scrollToTopButton.addEventListener("click", () => {
    root.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});