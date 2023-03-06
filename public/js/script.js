//Navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
// out hamburger
// window.addEventListener("click", function (e) {
//   if (e.target != hamburger && e.target != navMenu) {
//     hamburger.classList.remove("hamburger-active");
//     navMenu.classList.add("hidden");
//   }
// });

//darkmode toggle
// const darkToggle = document.querySelector("#dark-toggle");
// const html = document.querySelector("html");

// darkToggle.addEventListener("click", function () {
//   if (darkToggle.checked) {
//     html.classList.add("dark");
//     localStorage.theme = "dark";
//   } else {
//     html.classList.remove("dark");
//     localStorage.theme = "light";
//   }
// });

//toggle term
const darkToggleTerm = document.querySelector("#dark-toggle-term");
var divIndo = document.getElementById("p-term-indo");
var divegls = document.getElementById("p-term-egls");

// darkToggleTerm.addEventListener("click", function () {
//   if (darkToggleTerm.checked) {
//     if (divIndo.style.display === "none") {
//       divIndo.style.display = "block";
//       divegls.style.display = "none";
//     } else {
//       divIndo.style.display = "none";
//       divegls.style.display = "block";
//     }
//   } else {
//     if (divIndo.style.display === "none") {
//       divIndo.style.display = "block";
//       divegls.style.display = "none";
//     } else {
//       divIndo.style.display = "none";
//       divegls.style.display = "block";
//     }
//   }
// });

//toggle term privace
const darkToggleTermprivacy = document.querySelector(
  "#dark-toggle-term-privacy"
);
var divIndoprivacy = document.getElementById("p-term-privacy-indo");
var diveglsprivacy = document.getElementById("p-term-privacy-eglsh");

// darkToggleTermprivacy.addEventListener("click", function () {
//   if (darkToggleTermprivacy.checked) {
//     if (divIndoprivacy.style.display === "none") {
//       divIndoprivacy.style.display = "block";
//       diveglsprivacy.style.display = "none";
//     } else {
//       divIndoprivacy.style.display = "none";
//       diveglsprivacy.style.display = "block";
//     }
//   } else {
//     if (divIndoprivacy.style.display === "none") {
//       divIndoprivacy.style.display = "block";
//       diveglsprivacy.style.display = "none";
//     } else {
//       divIndoprivacy.style.display = "none";
//       diveglsprivacy.style.display = "block";
//     }
//   }
// });
