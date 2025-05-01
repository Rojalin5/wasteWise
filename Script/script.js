const elementsToAnimate = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-viewport');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, {
      threshold: 0.15 // Trigger when 15% of the element is visible
    });

    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });

    // Testimonial Carousel Logic (One Slide at a Time)

  const track = document.querySelector('.testimonial-track');
  const slides = document.querySelectorAll('.testimonial-slide');
  let currentIndex = 0;

  function slideTo(index) {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    slideTo(currentIndex);
  }

  setInterval(nextSlide, 2000); // every 3 seconds




    