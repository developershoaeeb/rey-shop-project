// const btnHamburger = document.getElementById("btnHamburger");
// const navLinks = document.getElementById("nav_links");
// const overly = document.getElementById("overly");

// btnHamburger.addEventListener("click", function () {
//   if (btnHamburger.classList.contains("open")) {
//     btnHamburger.classList.remove("open");
//     overly.classList.remove("overly");

//     navLinks.classList.remove("show");
//   } else {
//     btnHamburger.classList.add("open");
//     overly.classList.add("overly");

//     navLinks.classList.add("show");
//   }
// });

// nav bottom bar

// var btnContainer = document.getElementById("navbar");
// var btns = document.querySelectorAll(".navlinks").forEach((link) => {
//   link.addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace("active");
//     this.className += "active";
//   });
// });

// nav bottom bar
// const activePage = window.location.pathname;
// const navLink = document.querySelectorAll(".navlinks").forEach((link) => {
//   if (link.href.includes(`${activePage}`)) {
//     link.classList.add("active");
//   }
// link.classList.add("active");
// });

const navLink = document.querySelectorAll(".navlinks");
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    removeActive();
    link.classList.add("active");
  });
});

function removeActive() {
  navLink.forEach((link) => {
    link.classList.remove("active");
  });
}
