const navbar = document.querySelector(".navbar")
const sitelogo = document.querySelector(".siteLogo")
const eventsSection = document.querySelector(".eventsSection")

window.addEventListener("scroll", () => {
    if (innerWidth >= 768) {
        if (window.scrollY > eventsSection.offsetTop) {
            sitelogo.classList.add("glassmorphic")
            navbar.classList.add("glassmorphic")
        }
        if (window.scrollY < eventsSection.offsetTop) {
            sitelogo.classList.remove("glassmorphic")
            navbar.classList.remove("glassmorphic")
        }
    }
})