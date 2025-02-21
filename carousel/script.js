

const images = [
    { src: "https://extrasport.ru/img/clubs/welcom-block-img-2.jpg", caption: "Someone Famous 1" },
    { src: "https://extrasport.ru/img/clubs/welcom-block-img-4.jpg", caption: "Someone Famous 2" },
    { src: "https://extrasport.ru/img/clubs/welcom-block-img-5.jpg", caption: "Someone Famous 3" },
    ];

    let currentIndex = 0;
    const totalImages = images.length;
    const carousel = document.querySelector(".carousel_clubs");
    
    document.addEventListener("DOMContentLoaded", () => {
        if (!carousel) return;
    
        images.forEach((item, index) => {
            const slide = document.createElement("div");
            slide.className = "carousel_clubs-item";
            
            const image = document.createElement("img");
            image.src = item.src;
            image.alt = `Slide ${index + 1}`;
            slide.appendChild(image);
    
            const caption = document.createElement("div");
            caption.className = "carousel_clubs-caption";
            caption.textContent = item.caption;
            slide.appendChild(caption);
    
            carousel.appendChild(slide);
        });
    
        const updateSlides = () => {
            document.querySelectorAll(".carousel_clubs-item").forEach((slide, index) => {
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
    
        const prevButton = document.querySelector(".prev");
        const nextButton = document.querySelector(".next");
    
        const changeSlide = (direction) => {
            currentIndex = (currentIndex + direction + totalImages) % totalImages;
            updateSlides();
        };
    
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
    
        updateSlides();
    });
    