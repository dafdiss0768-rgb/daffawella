/* =========================
   SHOWCASE SLIDER
========================= */

const slides = document.querySelectorAll(".showcase-slide");

const dots = document.querySelectorAll(".dot");

const nextBtn = document.querySelector(".nextBtn");

const prevBtn = document.querySelector(".prevBtn");

let currentSlide = 0;

// SHOW SLIDE
function showSlide(index){

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[index].classList.add("active");

  dots[index].classList.add("active");

}

// NEXT
nextBtn.addEventListener("click", () => {

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);

});

// PREV
prevBtn.addEventListener("click", () => {

  currentSlide--;

  if(currentSlide < 0){
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);

});

// DOT CLICK
dots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    currentSlide = index;

    showSlide(currentSlide);

  });

});

// AUTO SLIDE
setInterval(() => {

  currentSlide++;

  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  showSlide(currentSlide);

}, 5000);