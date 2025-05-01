const slider = document.getElementById('cardSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cardWidth = 320; // card width + gap
const visibleCards = 4;
const totalCards = 28;
const maxScroll = Math.ceil(totalCards / visibleCards) - 1;

let currentSlide = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * cardWidth * visibleCards}px)`;
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide >= maxScroll;
}

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSlide < maxScroll) {
    currentSlide++;
    updateSlider();
  }
});
  document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll('.fade-in');

    const options = {
      threshold: 0.1
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      });
    }, options);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });

updateSlider(); // initial state