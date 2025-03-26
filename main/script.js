window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const video = document.querySelector('header.main video');
    let scrollValue = window.scrollY;

    heroContent.style.transform = `scale(${1 + scrollValue * .05})`;
    video.style.transform = `scale(${1 + scrollValue * .0005})`;
    
});