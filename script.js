// ⏳ Countdown Timer Logic
const startDate = new Date(2020, 6, 8); // July 8, 2020

function updateElapsedTime() {
    const now = new Date();
    const elapsedTime = now - startDate;

    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// ⏳ Update Timer Every Second
setInterval(updateElapsedTime, 1000);
updateElapsedTime();

// 🎞️ Slideshow Animation Logic
let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

// Change image every 3 seconds
setInterval(showNextSlide, 3000);
