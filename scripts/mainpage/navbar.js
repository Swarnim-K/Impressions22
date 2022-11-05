const navbar = document.querySelector(".navbar")
const sitelogo = document.querySelector(".siteLogo")
const countdownCtn = document.querySelector(".countdown-container")

window.addEventListener("scroll", () => {
    if (window.scrollY > countdownCtn.offsetTop) {
        sitelogo.classList.add("glassmorphic")
        navbar.classList.add("glassmorphic")
    }
    if (window.scrollY < countdownCtn.offsetTop) {
        sitelogo.classList.remove("glassmorphic")
        navbar.classList.remove("glassmorphic")
    }
})