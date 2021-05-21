// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//     x.className += " responsive";
//     } else {
//     x.className = "topnav";
//     }
// } 

// /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         // console.log(currentScrollPos)

//         document.getElementById("myTopnav").style.top = "0";

//     } else {
//         document.getElementById("myTopnav").style.top = "-50px";
//         // console.log(prevScrollpos)

//     }
//     prevScrollpos = currentScrollPos;
// } 

// Flex-nav 
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".nav-item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

/* Activate Submenu */
function toggleItem() {
if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
} else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
} else {
    this.classList.add("submenu-active");
}
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
let isClickInside = menu.contains(e.target);

if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
}
}
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
}
item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);


