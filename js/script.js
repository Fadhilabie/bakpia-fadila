// Swiper
var swiper = new Swiper(".mySwiperPopuler", {
  grabCursor: true,
  centeredSlides: false,
  spaceBetween: 20,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".fa-circle-chevron-right",
    prevEl: ".fa-circle-chevron-left",
  },
});

// Navbar
function setActiveNavLink(link) {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
  });
  link.classList.add("active");
}

function scrollToProject() {
  const projectSection = document.getElementById("project");
  if (projectSection) {
    projectSection.scrollIntoView({ behavior: "smooth" });
  }
}

const serviceNavLink = document.querySelector(".nav-link[href='#project']");
if (serviceNavLink) {
  serviceNavLink.addEventListener("click", (event) => {
    event.preventDefault(); // Hindari mengikuti tautan langsung
    scrollToProject(); // Arahkan ke "project"
    setActiveNavLink(serviceNavLink); // Aktifkan kelas "active" pada tautan "Service"
  });
}

// Tambahkan kode untuk tautan "About"
function scrollToAbout() {
  const aboutSection = document.getElementById("ingredients");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
}

const aboutNavLink = document.querySelector(".nav-link[href='#ingredients']");
if (aboutNavLink) {
  aboutNavLink.addEventListener("click", (event) => {
    event.preventDefault(); // Hindari mengikuti tautan langsung
    scrollToAbout(); // Arahkan ke "about"
    setActiveNavLink(aboutNavLink); // Aktifkan kelas "active" pada tautan "About"
  });
}

// hero slider
const heroSlider = document.querySelector("#myCarousel");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

// auto slide
let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

const stopAutoSlide = function () {
  clearInterval(autoSlideInterval);
}

heroSlider.addEventListener("mouseover", stopAutoSlide);
heroSlider.addEventListener("mouseout", autoSlide);

window.addEventListener("load", autoSlide);
