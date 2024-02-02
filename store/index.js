// script.js

document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');

  let currentIndex = 0;

  function updateCarousel() {
    const itemWidth = items[0].offsetWidth;
    track.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }

  setInterval(nextSlide, 1000); // Change slide every 1 seconds
});
