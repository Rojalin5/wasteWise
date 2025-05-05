const slider = document.getElementById('cardSlider');
// const prevBtn = document.getElementById('prevBtn'); // Removed
// const nextBtn = document.getElementById('nextBtn'); // Removed
// const cardWidth = 320; // card width + gap // No longer needed for direct manipulation
// const visibleCards = 4; // No longer needed for direct manipulation
// const totalCards = 28; // No longer needed for direct manipulation
// const maxScroll = Math.ceil(totalCards / visibleCards) - 1; // No longer needed

// let currentSlide = 0; // No longer needed

// function updateSlider() {
//     slider.style.transform = `translateX(-${currentSlide * cardWidth * visibleCards}px)`;
//     prevBtn.disabled = currentSlide === 0;
//     nextBtn.disabled = currentSlide >= maxScroll;
// }

// prevBtn.addEventListener('click', () => {
//     if (currentSlide > 0) {
//         currentSlide--;
//         updateSlider();
//     }
// });

// nextBtn.addEventListener('click', () => {
//     if (currentSlide < maxScroll) {
//         currentSlide++;
//         updateSlider();
//     }
// });

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

  document.getElementById("searchBtn").addEventListener("click", function () {
    const query = document.getElementById("stateSearch").value.toLowerCase();
    const cards = document.querySelectorAll(".card-slider .card");

    cards.forEach(card => {
      const tag = card.querySelector(".tag").textContent.toLowerCase();
      if (tag.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  // Optional: Enable search by pressing Enter
  document.getElementById("stateSearch").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      document.getElementById("searchBtn").click();
    }
  });

    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(q => {
        q.addEventListener('click', () => {
            const answer = q.nextElementSibling;
            const isOpen = q.classList.contains('active');
            questions.forEach(btn => {
                btn.classList.remove('active');
                btn.nextElementSibling.style.display = 'none';
            });
            if (!isOpen) {
                q.classList.add('active');
                answer.style.display = 'block';
            }
        });
    });


  const buttons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      contents.forEach(content => content.style.display = 'none');

      button.classList.add('active');
      document.getElementById(button.dataset.tab).style.display = 'block';
    });
  });




// updateSlider(); // initial state // Removed