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

imgChange.addEventListener("click", function() {
  window.location.href = "http://www.midashoes.com/";
});