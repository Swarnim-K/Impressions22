gsap.registerPlugin(ScrollTrigger)

gsap.from(".eventsTitle", {
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".eventsTitle",
        toggleActions: "restart none none none"
    }
})