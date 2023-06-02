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
      content1.style.display = "none";
      button1.style.display = "flex";
    }
  }
  
  function showButton2() {
    var button3 = document.getElementById("toggleButton2");
    var content3 = document.getElementById("content2");
    
    content3.style.display = "none";
    button3.style.display = "flex";
  }
// function toggleContent() {
//     var button = document.getElementById("toggleButton");
//     var content = document.getElementById("content");
    
//     if (content.style.display === "none") {
//       content.style.display = "block";
//       button.style.display = "none";
//     } else {
//       content.style.display = "none";
//       button.style.display = "block";
//     }
//   }
  

// function toggle() {
//     var faq = document.getElementById("hide");
//     if (faq.style.display === "none") {
//         faq.style.display = "block";
//     } else {
//         faq.style.display = "none";
//     }
// }

// function toggleDropdown() {
//     var dropdownContent = document.getElementById("dropdownContent");
//     if (dropdownContent.style.display === "none") {
//         dropdownContent.style.display = "block";
//     } else {
//         dropdownContent.style.display = "none";
//     }
// }





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
