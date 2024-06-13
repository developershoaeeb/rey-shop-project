const hamburger_menu = document.getElementById("hamburger_menu");
const main_nav_container = document.getElementById("main_nav_container");
const nav_logo_white = document.getElementById("nav_logo_white");
const nav_logo_red = document.getElementById("nav_logo_red");
const mobile_nav_bg = document.getElementById("mobile_nav_bg");

hamburger_menu.addEventListener("click", () => {
  hamburger_menu.classList.toggle("active");
  main_nav_container.classList.toggle("active");
  nav_logo_white.classList.toggle("active");
  nav_logo_red.classList.toggle("active");
  mobile_nav_bg.classList.toggle("active");
});

// toggle
const hide_toggle_item = document.querySelectorAll(".hide_toggle_item");
const toggle_item = document.querySelectorAll(".toggle_item");
const toggle_hamburger_menu = document.querySelectorAll(
  ".toggle_hamburger_menu"
);

toggle_item.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tab.classList.toggle("active");

    // content box changing
    hide_toggle_item[index].classList.toggle("active");

    //   + - icon changing
    toggle_hamburger_menu[index].classList.toggle("active");
  });
});

// Navbar bottom border, page refreshing and border going display none

// const navLink = document.querySelectorAll(".navlinks");
// navLink.forEach((link) => {
//   link.addEventListener("click", () => {
//     removeActive();
//     link.classList.add("active");
//   });
// });

// function removeActive() {
//   navLink.forEach((link) => {
//     link.classList.remove("active");
//   });
// }
