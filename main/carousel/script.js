let currentIndex = 0;
const carousel = document.querySelector(".carousel_clubs");

if (carousel) {
    const slides = Array.from(carousel.querySelectorAll(".carousel_clubs-item"));
    const totalImages = slides.length;

    const updateSlides = () => {
        slides.forEach((slide, index) => {
            let offset = (index - currentIndex + totalImages) % totalImages;
            if (offset === 0) {
                slide.style.transform = `translateX(0) scale(1.2)`;
                slide.style.zIndex = "2";
                slide.style.opacity = "1";
            } else if (offset === 1) {
                slide.style.transform = `translateX(120%) scale(0.8)`;
                slide.style.zIndex = "1";
                slide.style.opacity = "0.5";
            } else if (offset === totalImages - 1) {
                slide.style.transform = `translateX(-120%) scale(0.8)`;
                slide.style.zIndex = "1";
                slide.style.opacity = "0.5";
            } else {
                slide.style.transform = `translateX(${offset * 150}%) scale(0.5)`;
                slide.style.opacity = "0";
            }
        });
    };

    const changeSlide = (direction) => {
        currentIndex = (currentIndex + direction + totalImages) % totalImages;
        updateSlides();
    };

    document.addEventListener("DOMContentLoaded", updateSlides);

    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    if (prevButton && nextButton) {
        prevButton.addEventListener("click", () => changeSlide(-1));
        nextButton.addEventListener("click", () => changeSlide(1));
    }

    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].clientX;
    });

    carousel.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;
        if (touchEndX < touchStartX) changeSlide(1);
        if (touchEndX > touchStartX) changeSlide(-1);
    });
}

document.querySelector("a[href='#clubs']").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#clubs").scrollIntoView({ behavior: "smooth" });
});
