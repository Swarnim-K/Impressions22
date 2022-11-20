gsap.registerPlugin(ScrollTrigger)

gsap.from(".aboutUsTitle", {
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".aboutUsTitle",
        toggleActions: "restart none none none"
    }
})

gsap.from(".moduletext", {
    duration: 2,
    opacity: 0,
    y: "3vh",
    stagger: 0.25,
    scrollTrigger: {
        trigger: ".moduletext",
        toggleActions: "play none none none"
    }
})

gsap.from(".mainTitle", {
    duration: 2,
    opacity: 0,
})