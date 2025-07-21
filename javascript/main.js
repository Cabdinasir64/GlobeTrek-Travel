// responsive 
let menu = document.querySelector("#menu")
let header = document.querySelector(".header")

menu.addEventListener("click", () => {
    console.log("menu clicked")
    header.classList.toggle("show-menu")
})

// end responsive 

// start animation 
const services = document.querySelectorAll("#left");


window.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll("#hero-section");
    services.forEach((ser) => {
        ser.classList.add('visible');
    })

})



// right 
let right  = document.querySelectorAll("#left,#right, #content1, #content2, #content3")

function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;

    right.forEach(rig => {
        const serviceTop = rig.getBoundingClientRect().top;

        if (serviceTop < triggerBottom) {
            rig.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
