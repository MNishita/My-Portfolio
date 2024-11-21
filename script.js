let currentSlide = 0;
const slides = document.querySelectorAll('.slides');

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function changeSlide(step) {
    showSlide(currentSlide + step);
}

// Initialize the first slide as active
showSlide(currentSlide);
