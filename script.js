
// Smooth scrolling for internal links
// Enable card popup on mobile touch
document.querySelectorAll(".content-card, .project-card, .experience-card").forEach(card => {
    card.addEventListener("touchstart", () => {
        card.classList.add("pop");
    });

    card.addEventListener("touchend", () => {
        setTimeout(() => {
            card.classList.remove("pop");
        }, 150);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Mobile menu toggle (only if a menu exists)
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

