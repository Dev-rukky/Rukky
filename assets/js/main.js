window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

 const navMenu = document.getElementById("nav-menu"),
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

const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-slide');
const dots = document.querySelectorAll('.slider-dot');
let i;

const reset = () => dots.forEach((dot) => dot.classList.remove('active'));

function slideTo(n) {
  track.style.transform = `translateX(-${n * slides[0].offsetWidth}px)`;
  reset();
  dots[n].classList.add('active');
}

function activateArrows(direction) {
  direction === 'right' ? i++ : i--;
  if (i < 0) i = 0;
  if (i > slides.length - 1) i = slides.length - 1;
  slideTo(i);
}

function activateDots(e) {
  i = e.target.dataset.index;
  slideTo(i);
}

function activate(e) {
  e.target.matches('.slider-dot') && activateDots(e);
  e.target.matches('.arrow-right') && activateArrows('right');
  e.target.matches('.arrow-left') && activateArrows();
}

function init(n) {
  i = n;
  slideTo(n);
}

document.addEventListener('click', activate, false);
window.addEventListener('load', init(1), false);



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
