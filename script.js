document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});
});
});

const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementById("close");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

close.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

const cards = document.querySelectorAll(
".card, .member-card, .game-card, .feature-card, .rule"
);

window.addEventListener("scroll", () => {

cards.forEach(card => {

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight - 50){
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}

});

});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});