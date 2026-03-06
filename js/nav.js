const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-menu_visible');

  if (navMenu.classList.contains('nav-menu_visible')) {
    navToggle.setAttribute('aria-label', 'Cerrar menú');
  } else {
    navToggle.setAttribute('aria-label', 'Abrir menú');
  }
});

//carrousel//

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const images = document.querySelectorAll(".carousel img");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let index = 0;
  let interval;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % images.length;
    updateCarousel();
  }

  function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
  }

  function startAutoPlay() {
    interval = setInterval(nextSlide, 1500); // ⏱️ tiempo entre slides
  }

  function resetAutoPlay() {
    clearInterval(interval);
    startAutoPlay();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoPlay();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoPlay();
  });

  startAutoPlay();
});

//Tienda//

const imagenes = document.querySelectorAll(".card_producto img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox_img");
const cerrar = document.querySelector(".cerrar");

imagenes.forEach(img => {
img.addEventListener("click", () => {
lightbox.style.display = "flex";
lightboxImg.src = img.src;
});
});

cerrar.addEventListener("click", () => {
lightbox.style.display = "none";
});

lightbox.addEventListener("click", () => {
lightbox.style.display = "none";
});
