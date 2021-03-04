/* 
=====================
Navbar area
=====================
*/

const barIcon = document.querySelector(".bar-icon");
const mainMenu = document.querySelector(".main-menu");
const timesIcon = document.querySelector(".times-icon");

barIcon.addEventListener("click", function () {
    mainMenu.style.display = "flex";
    mainMenu.style.left = "0px";
});

timesIcon.addEventListener("click", function () {
    mainMenu.style.left = "-100%";
});

window.addEventListener("scroll", function () {
    const navbar = document.querySelector("#navbar");
    this.scrollY > 10 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
});

/* 
=====================
Scroll top area
=====================
*/

$('.bck').backToTop({
    iconName: 'fas fa-chevron-up',
    trigger : 300,
    // 'rightToLeft', 'leftToRight'
    // 'bottomToTop', 'topToBottom '
    fxName : 'fade',

    // duration of animation
    fxTransitionDuration : 300,
    scrollDuration : 300
});    