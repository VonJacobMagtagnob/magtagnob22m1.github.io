let indoorImages = ["image/indoor1.jpg", "image/indoor2.jpg", "image/indoor3.jpg"];
let outdoorImages = ["image/outdoor1.jpg", "image/outdoor2.jpg", "image/outdoor3.jpg"];
let eventsImages = ["image/events1.jpg", "image/events2.jpg", "image/events3.jpg"];

let indoorImageIndex = 0;
let outdoorImageIndex = 0;
let eventsImageIndex = 0;

function changeImages() {
  indoorImageIndex = (indoorImageIndex + 1) % indoorImages.length;
  document.getElementById("indoor-image").src = indoorImages[indoorImageIndex];

  outdoorImageIndex = (outdoorImageIndex + 1) % outdoorImages.length;
  document.getElementById("outdoor-image").src = outdoorImages[outdoorImageIndex];

  eventsImageIndex = (eventsImageIndex + 1) % eventsImages.length;
  document.getElementById("events-image").src = eventsImages[eventsImageIndex];
}

setInterval(changeImages, 3000); // Change images every 3 seconds