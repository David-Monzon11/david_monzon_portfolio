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
      if (window.innerWidth <= 768 && nav.classList.contains("open")) {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// Scroll to top functionality
const scrollTopBtn = document.querySelector(".scroll-top");
if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Show/hide scroll to top button
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.opacity = "1";
      scrollTopBtn.style.pointerEvents = "auto";
    } else {
      scrollTopBtn.style.opacity = "0.5";
      scrollTopBtn.style.pointerEvents = "none";
    }
  });
}

// Dark mode toggle
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem("theme") || "dark";
if (currentTheme === "dark") {
  body.classList.add("dark-theme");
  body.classList.remove("light-theme");
  updateThemeIcon(true);
} else {
  body.classList.add("light-theme");
  body.classList.remove("dark-theme");
  updateThemeIcon(false);
}

function updateThemeIcon(isDark) {
  if (themeToggle) {
    const icon = themeToggle.querySelector("i");
    if (icon) {
      icon.className = isDark ? "fas fa-sun" : "fas fa-moon";
    }
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = body.classList.contains("dark-theme");
    
    if (isDark) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
      updateThemeIcon(false);
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
      updateThemeIcon(true);
    }
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
    ".section, .project-card, .card, .contact-form, .hero-left, .hero-right, .hero-center, .education-card, .cert-card"
  )
  .forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });


