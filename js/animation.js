const content = document.querySelector('.content');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', () => {
  if (isElementInViewport(content)) {
    content.style.animation = 'welcome 2s ease-in 0s 1 normal none';
  } else {
    content.style.animation = 'none';
  }
});

let images = ["image/picb4.jpg", "image/picb1.jpg", "image/picb2.jpg","image/picb3.jpg"];
let imgElement = document.querySelector(".profile-breakfast img");
let currentIndex = 0;

function changeImage() {
  imgElement.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

let hoverTimeout;

document.querySelector(".profile-breakfast").addEventListener("mouseover", function() {
  hoverTimeout = setInterval(changeImage, 500); // change image every 0.5 seconds
});

document.querySelector(".profile-breakfast").addEventListener("mouseout", function() {
  clearInterval(hoverTimeout);
});

let images1 = ["image/picl4.jpg", "image/picl1.jpg", "image/picl2.jpg","image/picl3.jpg"];
let imgElement1 = document.querySelector(".profile-lunch img");
let currentIndex1 = 0;

let hoverTimeout1;

document.querySelector(".profile-lunch").addEventListener("mouseover", function() {
  hoverTimeout1 = setInterval(function() {
    imgElement1.src = images1[currentIndex1];
    currentIndex1 = (currentIndex1 + 1) % images1.length;
  }, 500); // change image every 0.5 seconds
});

document.querySelector(".profile-lunch").addEventListener("mouseout", function() {
  clearInterval(hoverTimeout1);
});

let images2 = ["image/picd4.jpg", "image/picd1.jpg", "image/picd2.jpg","image/picd3.jpg"];
let imgElement2 = document.querySelector(".profile-dinner img");
let currentIndex2 = 0;

let hoverTimeout2;

document.querySelector(".profile-dinner").addEventListener("mouseover", function() {
  hoverTimeout2 = setInterval(function() {
    imgElement2.src = images2[currentIndex2];
    currentIndex2 = (currentIndex2 + 1) % images2.length;
  }, 500); // change image every 0.5 seconds
});

document.querySelector(".profile-dinner").addEventListener("mouseout", function() {
  clearInterval(hoverTimeout2);
});

let images3 = ["image/picds4.jpg", "image/picds1.jpg", "image/picds2.jpg","image/picds3.jpg"];
let imgElement3 = document.querySelector(".profile-dessert img");
let currentIndex3 = 0;

let hoverTimeout3;

document.querySelector(".profile-dessert").addEventListener("mouseover", function() {
  hoverTimeout3 = setInterval(function() {
    imgElement3.src = images3[currentIndex3];
    currentIndex3 = (currentIndex3 + 1) % images3.length;
  }, 500); // change image every 0.5 seconds
});

document.querySelector(".profile-dessert").addEventListener("mouseout", function() {
  clearInterval(hoverTimeout3);
});


let images4 = ["image/picbb4.jpg", "image/picbb1.jpg", "image/picbb2.jpg","image/picbb3.jpg"];
let imgElement4 = document.querySelector(".profile-beverage img");
let currentIndex4 = 0;

let hoverTimeout4;

document.querySelector(".profile-beverage").addEventListener("mouseover", function() {
  hoverTimeout4 = setInterval(function() {
    imgElement4.src = images4[currentIndex4];
    currentIndex4 = (currentIndex4 + 1) % images4.length;
  }, 500); // change image every 0.5 seconds
});

document.querySelector(".profile-beverage").addEventListener("mouseout", function() {
  clearInterval(hoverTimeout4);
});


/*page1*/

const page1 = document.querySelector('.page1');

let backgroundImageIndex = 0;
const backgrounds = [
  'url(image/pic1.jpg)',
  'url(image/pic5.jpg)',
  'url(image/pic6.jpg)',
  'url(image/pic4.jpg)'
];

page1.style.transition = 'background-image 1s'; // add transition effect

setInterval(() => {
  page1.style.backgroundImage = backgrounds[backgroundImageIndex];
  backgroundImageIndex = (backgroundImageIndex + 1) % backgrounds.length;
}, 2500); // change background every 2.5 seconds