// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 720 && nav.classList.contains("open")) {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// Set current year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Reveal on scroll for sections and cards
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document
  .querySelectorAll(
    ".section, .project-card, .card, .hero-card, .hero-float, .contact-form"
  )
  .forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });


