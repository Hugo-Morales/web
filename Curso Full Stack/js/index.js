let mainNav = document.getElementById("ksmenu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
    console.log("click");
});


// ------------------------- Sticky -------------------------
window.addEventListener("scroll", function() {
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})