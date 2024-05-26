document.addEventListener("DOMContentLoaded", function () {
  // Current Year
  // Get the current year
  var currentYear = new Date().getFullYear();

  // Update the text content of the element with id "currentYear"
  document.getElementById("currentYear").textContent = currentYear;

  // Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const closeMenu = document.querySelector(".close-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const body = document.querySelector("body");

  // Opening Menu
  menuToggle.addEventListener("click", function () {
    mobileMenu.style.display = "flex";
    menuToggle.style.display = "none";
    closeMenu.style.display = "block";
    body.classList.toggle("no-scroll");
  });
  closeMenu.addEventListener("click", function () {
    mobileMenu.style.display = "none";
    menuToggle.style.display = "block";
    closeMenu.style.display = "none";
    body.classList.toggle("no-scroll");
  });
});

//Hero Carousel 
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
let autoSlideInterval; //new

function showSlide(index) {
  carouselItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function moveCarousel(direction) {
  const newIndex = direction === 'prev'
    ? (currentIndex - 1 + carouselItems.length) % carouselItems.length
    : (currentIndex + 1) % carouselItems.length;

  showSlide(newIndex);
  currentIndex = newIndex;
}
// Function to start the automatic slide transition
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    moveCarousel('next');
  }, 3000); 
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}


prevBtn.addEventListener('click', () =>{
  moveCarousel('prev');
  resetAutoSlide();
});
nextBtn.addEventListener('click', () => {
  moveCarousel('next');
  resetAutoSlide();
});
// Initial setup
showSlide(currentIndex);
startAutoSlide();

//FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  const questionToggle = question.querySelector('.question-toggle');
  const answer = question.querySelector('.answer');
  const toggleIcon = question.querySelector('.toggle-icon');

  questionToggle.addEventListener('click', () => {
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    toggleIcon.classList.toggle('rotate');
  });
});

//Hamburger
document.addEventListener("DOMContentLoaded", function() {
  const navContainer = document.querySelector(".nav-container");
  const navOpenBtn = document.querySelector(".navOpenBtn");
  const navCloseBtn = document.querySelector(".navCloseBtn");
  const navLinks = document.querySelector(".nav-links");

  navCloseBtn.addEventListener("click", function() {
    navContainer.classList.remove("nav-open");
    navLinks.style.left = "-100%";
});

  navOpenBtn.addEventListener("click", function(event) {
      event.preventDefault();
      navContainer.classList.add("nav-open");
      navLinks.style.left = "0";
  });

});
