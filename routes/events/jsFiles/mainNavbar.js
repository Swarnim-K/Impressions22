var mnbar = document.getElementById("mainNavbar");
var barsIcon = document.getElementById("barsIcon");

function showHidemnbar() {
    if (mnbar.style.display == "flex") {
        mnbar.style.display = "none";
        barsIcon.src = "images/icons8-menu-100.png";
    }
    else {
        mnbar.style.display = "flex";
        barsIcon.src = "images/icons8-close-96.png";
    }
}