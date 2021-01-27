var modal = document.getElementById("modal-window")
var img = document.getElementById("modal-img")

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