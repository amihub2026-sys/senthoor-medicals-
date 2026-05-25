const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 3500);

const medicalSlides = document.querySelectorAll(".medical-slide");

let medicalCurrentSlide = 0;

function changeMedicalSlide(){

  medicalSlides[medicalCurrentSlide]
  .classList.remove("active-medical-slide");

  medicalCurrentSlide++;

  if(medicalCurrentSlide >= medicalSlides.length){
    medicalCurrentSlide = 0;
  }

  medicalSlides[medicalCurrentSlide]
  .classList.add("active-medical-slide");
}

setInterval(changeMedicalSlide, 4000);


const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";

  const update = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){
      counter.innerText = Math.ceil(current + increment);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };

  update();
}); 