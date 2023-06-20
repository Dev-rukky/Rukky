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


function toggleContent() {
  var button = document.getElementById("toggleButton");
  var content = document.getElementById("content");

  if (content.style.display === "none") {
    content.style.display = "flex";
    button.style.display = "none";
  } else {
    content.style.display = "none";
    button.style.display = "flex";
  }
}

function showButton() {
  var button = document.getElementById("toggleButton");
  var content = document.getElementById("content");

  content.style.display = "none";
  button.style.display = "flex";
}

function toggleContent1() {
  var button1 = document.getElementById("toggleButton1");
  var content1 = document.getElementById("content1");

  if (content1.style.display === "none") {
    content1.style.display = "flex";
    button1.style.display = "none";
  } else {
    content1.style.display = "none";
    button1.style.display = "flex";
  }
}

function showButton1() {
  var button2 = document.getElementById("toggleButton1");
  var content2 = document.getElementById("content1");

  content2.style.display = "none";
  button2.style.display = "flex";
}

function toggleContent2() {
  var button2 = document.getElementById("toggleButton2");
  var content2 = document.getElementById("content2");

  if (content2.style.display === "none") {
    content2.style.display = "flex";
    button2.style.display = "none";
  } else {
    content2.style.display = "none";
    button2.style.display = "flex";
  }
}

function showButton2() {
  var button3 = document.getElementById("toggleButton2");
  var content3 = document.getElementById("content2");

  content3.style.display = "none";
  button3.style.display = "flex";
}

function toggleContent3() {
  var button3 = document.getElementById("toggleButton3");
  var content3 = document.getElementById("content3");

  if (content3.style.display === "none") {
    content3.style.display = "flex";
    button3.style.display = "none";
  } else {
    content3.style.display = "none";
    button3.style.display = "flex";
  }
}

function showButton3() {
  var button4 = document.getElementById("toggleButton3");
  var content4 = document.getElementById("content3");

  content4.style.display = "none";
  button4.style.display = "flex";
}

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
