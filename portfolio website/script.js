document.getElementById("navToggle").addEventListener("click", function () {
    const navRight = document.querySelector(".nav-right");
    navRight.classList.toggle("active");
    
    if (navRight.classList.contains("active")) {
        navRight.style.top = "60px";
        navRight.style.opacity = 1;
    } else {
        navRight.style.top = "-100%";
        navRight.style.opacity = 0;
    }
});

var time = gsap.timeline();

time.from("body",{
    y:-500,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.5
})


time.from("p,.links",{
    x:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.5
})
