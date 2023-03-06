//toggle term
const darkToggleTerm = document.querySelector("#dark-toggle-term");
var divIndo = document.getElementById("p-term-indo");
var divegls = document.getElementById("p-term-egls");

darkToggleTerm.addEventListener("click", function () {
  if (darkToggleTerm.checked) {
    if (divIndo.style.display === "none") {
      divIndo.style.display = "block";
      divegls.style.display = "none";
    } else {
      divIndo.style.display = "none";
      divegls.style.display = "block";
    }
  } else {
    if (divIndo.style.display === "none") {
      divIndo.style.display = "block";
      divegls.style.display = "none";
    } else {
      divIndo.style.display = "none";
      divegls.style.display = "block";
    }
  }
});

// //toggle term privace
// const darkToggleTermprivacy = document.querySelector(
//   "#dark-toggle-term-privacy"
// );
// var divIndoprivacy = document.getElementById("p-term-privacy-indo");
// var diveglsprivacy = document.getElementById("p-term-privacy-eglsh");

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
