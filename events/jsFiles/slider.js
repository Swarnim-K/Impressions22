// Slider(all Slides in a container)
const slider = document.querySelector(".slider")
// All trails 
const trail = document.querySelector(".trail").querySelectorAll("div")

// Transform value
let Tvalue  = 0
// trail index number
let trailValue = 0
// interval (Duration)
let interval = 600000

// Function to slide forward
const slide = (condition) => {
    // CLear interval
    clearInterval(Astart)
    // update value and trailValue
    condition === "increase" ? initiateINC() : initiateDEC()
    // move slide
    move(Tvalue, trailValue)
    // Restart Animation
    Sanimate()
    // start interal for slides back 
    Astart = setInterval(() => slide("increase"), interval);
}

// function for increase(forward, next) configuration
const initiateINC = () => {
    // Remove active from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // increase transform value
    Tvalue === 75 ? Tvalue = 0 : Tvalue += 25
    // update trailValue based on value
    trailUpdate()
}

// function for decrease(backward, previous) configuration
const initiateDEC = () => {
     // Remove active from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // decrease transform value
    Tvalue === 0 ? Tvalue = 75 : Tvalue -= 25
     // update trailValue based on value
    trailUpdate()
}

// function to transform slide 
const move = (S, T) => {
    // transform slider
    slider.style.transform = `translateX(-${S}%)`
    //add active class to the current trail
    trail[T].classList.add("active")
}

const tl = gsap.timeline({defaults: {duration: 0.7, ease: "power2.inOut"}})
tl.from(".bg", {x: "-100%", opacity: 0})
  .from(".details>p", {opacity: 0}, "-=0.4")
  .from(".details>h1", {opacity: 0, y: "50px"}, "-=0.5")

// function to restart animation
const Sanimate = () => tl.restart()

// function to update trailValue based on slide value
const trailUpdate = () => {
    if (Tvalue === 0) {
        trailValue = 0
    } else if (Tvalue === 25) {
        trailValue = 1
    } else if (Tvalue === 50) {
        trailValue = 2
    } else if (Tvalue===75){
        trailValue = 3
    }
}   

// Start interval for slides
let Astart = setInterval(() => slide("increase"), interval)

// Next  and  Previous button function (SVG icon with different classes)
document.querySelectorAll("svg").forEach(cur => {
    // Assign function based on the class Name("next" and "prev")
    cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
})

// function to slide when trail is clicked
const clickCheck = (e) => {
    // CLear interval
    clearInterval(Astart)
    // remove active class from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // Get selected trail
    const check = e.target
    // add active class
    check.classList.add("active")

    // Update slide value based on the selected trail
    if(check.classList.contains("box1")) {
        Tvalue = 0
    } else if (check.classList.contains("box2")) {
        Tvalue = 25
    } else if (check.classList.contains("box3")) {
        Tvalue = 50
    }
    else {
        Tvalue = 75
    }
    // update trail based on value
    trailUpdate()
    // transfrom slide
    move(Tvalue, trailValue)
    // start animation
    Sanimate()
    // start interval
    Astart = setInterval(() => slide("increase"), interval)
}

// Add function to all trails
trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))