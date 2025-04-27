const elementsToAnimate = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-viewport');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.15
    });

    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });