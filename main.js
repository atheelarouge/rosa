// Select element function
const selectElement = function(element) {
  return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
  body.classList.toggle('open');
});

let imgChange = selectElement("#img1");

imgChange.addEventListener("mouseover", function() {
  document.querySelector("#img1").setAttribute("src", "./images/menu-group-2.jpg" );
});

imgChange.addEventListener("mouseout", function() {
  document.querySelector("#img1").setAttribute("src", "./images/menu-group-1.jpg" );
});

// Scroll Reveal

window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600
});


