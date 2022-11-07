var btn = document.getElementById("scrollbtn");
var coepName = document.getElementById("blur0");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
    if (window.innerWidth >= 950) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            coepName.style.display = "none";
        } else {
            coepName.style.display = "flex";
        }
    }
    
}

function scrollToTop() {
    window.scrollTo(0, 0);
}