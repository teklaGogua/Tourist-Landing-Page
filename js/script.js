"use strict";

// SELECTORS
// For Home Page
const carousel = document.querySelector(".section-home");
const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");

// For Features Section
const btnPlay = document.querySelector(".btn--play");
const media = document.querySelector(".features-video");

// For Details Section
const services = document.querySelectorAll(".services--box");
const title = document.querySelectorAll(".third-heading");
const description = document.querySelectorAll(".description-text");
const img = document.querySelectorAll(".services-img");

let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
let captionHeader = document.getElementById("caption-header");
let span = document.getElementsByClassName("close")[0];

// VARIABLES
let count = 0;
let arr = [
  "img/Background_imgs/home00.png",
  "img/Background_imgs/home01.png",
  "img/Background_imgs/home02.png",
  "img/Background_imgs/home03.png",
  "img/Background_imgs/home04.png",
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

///////////////////////////////////////////////////////////
// VIDEO CONTROLS
btnPlay.addEventListener("click", function () {
  if (media.paused) {
    media.play();
    media.setAttribute("controls", "controls");
    btnPlay.style.display = "none";
  }
});

///////////////////////////////////////////////////////////
// SERVICES SECTION DATA
const data = {
  0: {
    title: "Flight booking",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    img: "img/services_imgs/flight_booking.png",
  },
  1: {
    title: "Hotel & resort booking",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    img: "img/services_imgs/hotel_resort_booking.png",
  },
  2: {
    title: "Family Trip Planner",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    img: "img/services_imgs/family_trip_planner.png",
  },
  3: {
    title: "Cruise Tour",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    img: "img/services_imgs/cruise_tour.png",
  },
  4: {
    title: "Fire Camp",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    img: "img/services_imgs/fire_camp.png",
  },
  5: {
    title: "Corporate Holidays",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    img: "img/services_imgs/corporate_holidays.png",
  },
};

for (let i = 0; i < services.length; i++) {
  title[i].textContent = data[i].title;
  description[i + 1].textContent = data[i].description; // Adding 1 bc there is one more element with description class
  img[i].src = data[i].img;

  services[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = data[i].img;
    captionHeader.innerHTML = data[i].title;
    captionText.innerHTML = data[i].description;
  };
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

///////////////////////////////////////////////////////////
// SETTING MAP
let myMap = L.map("map").setView([43.075, -89.4172], 18);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  maxZoom: 20,
}).addTo(myMap);

let sfo_marker = L.marker([43.075, -89.4172]).addTo(myMap);
sfo_marker.bindPopup("<b>Tourism Office</b>");
