// Fade-in effect
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = "1";
    }, index * 500);
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Contact form demo
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    form.reset();
  });
}
// Explore button with sound + smooth scroll
const exploreBtn = document.querySelector(".btn");
const clickSound = document.getElementById("clickSound");

if (exploreBtn && clickSound) {
  exploreBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Try to play sound
    clickSound.currentTime = 0;
    clickSound.play().catch(err => {
      console.log("Audio playback failed:", err);
    });

    // Smooth scroll
    document.querySelector("#about").scrollIntoView({
      behavior: "smooth"
    });
  });
}
// Hover sound for skill cards
const skillCards = document.querySelectorAll(".skill-card");
const hoverSound = document.getElementById("hoverSound");

if (hoverSound) {
  skillCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      hoverSound.currentTime = 0; // restart if triggered quickly
      hoverSound.play().catch(err => {
        console.log("Audio playback failed:", err);
      });
    });
  });
}
