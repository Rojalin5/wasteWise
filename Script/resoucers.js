     // Simulate delay for the "Get in touch" button
     function simulateDelay() {
        const button = document.querySelector(".btn-primary");
        button.innerText = "Processing...";
        setTimeout(() => {
            button.innerText = "Get in touch";
            alert("Redirecting to contact form...");
            window.location.href = "#contact";
        }, 2000); // 2-second delay
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });