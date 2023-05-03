"use strict";

// Selectors
const carousel = document.querySelector(".section-home");
const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");

// Variables
let count = 0;
let arr = [
  "../img/Background_imgs/home00.png",
  "../img/Background_imgs/home01.png",
  "../img/Background_imgs/home02.png",
  "../img/Background_imgs/home03.png",
  "../img/Background_imgs/home04.png",
];
let maxVal = arr.length - 1;

///////////////////////////////////////////////////////////
// CAROUSEL FOR HOME PAGE
function btnFun(max = 0, min = 0, val = 0) {
  // Function works for both "left" and "right" arrows
  // If there is no next element in array (count equals to max), 
  // Function goes back to min value, val is counter steps
  if (count === max) {
    count = min;
  } else {
    count += val;
  }
  carousel.style.background = `url(${arr[count]}) no-repeat center center/cover`;
}
btnFun();

btnRight.addEventListener("click", function () {
  btnFun(maxVal, 0, 1);
});

btnLeft.addEventListener("click", function () {
  btnFun(0, maxVal, -1);
});