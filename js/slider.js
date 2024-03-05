document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".slider-dots");

    let currentSlideIndex = 0;

    // Function to show a slide
    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;

        // Highlight the corresponding dot
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    // Function to handle click on a dot
    function dotClickHandler(event) {
        if (event.target.classList.contains("dot")) {
            const dotIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
            currentSlideIndex = dotIndex;
            showSlide(currentSlideIndex);
        }
    }

    // Create dots and add event listeners
    slides.forEach(() => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dotsContainer.appendChild(dot);
    });

    dotsContainer.addEventListener("click", dotClickHandler);

    // Autoplay the slider
    function autoPlay() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    setInterval(autoPlay, 3000); // Change slide every 3 seconds

    // Show the initial slide
    showSlide(currentSlideIndex);
});
