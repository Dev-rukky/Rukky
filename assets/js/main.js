const header = document.getElementById("header"),
    navMenu = document.getElementById("nav-menu"),
    navOpen = document.getElementById("nav-open"),
    navClose = document.getElementById("nav-close"),
    navLinks = document.querySelectorAll(".nav__link");


navOpen.addEventListener("click", () => {
    navMenu.classList.add("nav__menu--open");
});

// Close the nav menu
navClose.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--open");
});

// Close the nav menu when the user clicks on each nav link
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("nav__menu--open");
    });
});

window.addEventListener("load", function () {
    var preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});


// let darkmode = document.querySelector('#darkmode');

// darkmode.onclick = () => {
//     if (darkmode.classList.contains('bx-moon')){
//        darkmode.classList.replace('bx-moon' , 'bx-sun');
//        document.body.classList.add('color');
//     }else{
//         darkmode.classList.replace('bx-sun' , 'bx-moon');
//         document.body.classList.remove('color');
//     }
// }
