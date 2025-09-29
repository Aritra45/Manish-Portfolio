// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  themeToggle.textContent = document.documentElement.classList.contains('light') ? '☀' : '☾';
});

// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburger.addEventListener("click", () => {
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.hidden = isExpanded;
    mobileMenu.classList.toggle("active", !isExpanded);
  });

  // Close menu when clicking a link
  document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.hidden = true;
      hamburger.setAttribute("aria-expanded", "false");
      mobileMenu.classList.remove("active");
    });
  });
});


// Year update
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Typewriter text
const typewriterEl = document.getElementById('typewriter');
if (typewriterEl) {
  const phrases = ['Film • Theatre • TV', 'Character Actor', 'Professional Portfolio'];
  let i = 0, j = 0, current = '';
  function typeWriter() {
    if (i >= phrases.length) i = 0;
    const phrase = phrases[i];
    current = phrase.slice(0, j + 1);
    typewriterEl.textContent = current;
    j++;
    if (j === phrase.length) { i++; j = 0; setTimeout(typeWriter, 1500); }
    else { setTimeout(typeWriter, 150); }
  }
  typeWriter();
}

// Stats count animation
const stats = document.querySelectorAll('.stat .num');
stats.forEach(stat => {
  const target = +stat.dataset.target;
  let count = 0;
  const step = target / 200;
  function update() { count += step; if (count >= target) { stat.textContent = target; } else { stat.textContent = Math.floor(count); requestAnimationFrame(update); } }
  update();
});

// Animate highlight when in viewport
const highlights = document.querySelectorAll('.highlight');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.5 });

highlights.forEach(el => observer.observe(el));

const showMoreBtn = document.getElementById("showMoreBtn");
const showreelGrid = document.querySelector(".showreel-grid");
const Cards = showreelGrid.querySelectorAll(".video-card");
if (Cards.length <= 4) {
  showMoreBtn.style.display = "none";
}

showMoreBtn.addEventListener("click", () => {
  showreelGrid.classList.toggle("expanded");

  if (showreelGrid.classList.contains("expanded")) {
    showMoreBtn.textContent = "Show less";
  } else {
    showMoreBtn.textContent = "Show more";
  }
});

const showMoreBtnMusic = document.getElementById("showMoreBtnMusic");
const showreelGridMusic = document.querySelector(".showreel-grid-music");
const musicCards = showreelGridMusic.querySelectorAll(".video-card");
if (musicCards.length <= 4) {
  showMoreBtnMusic.style.display = "none";
}

showMoreBtnMusic.addEventListener("click", () => {
  showreelGridMusic.classList.toggle("expanded");

  if (showreelGridMusic.classList.contains("expanded")) {
    showMoreBtnMusic.textContent = "Show less";
  } else {
    showMoreBtnMusic.textContent = "Show more";
  }
});

const showMoreBtnDD = document.getElementById("showMoreBtnDD");
const showreelGridDD = document.querySelector(".showreel-grid-dd");
const ddCards = showreelGridDD.querySelectorAll(".video-card");
if (ddCards.length <= 4) {
  showMoreBtnDD.style.display = "none";
}

showMoreBtnDD.addEventListener("click", () => {
  showreelGridDD.classList.toggle("expanded");

  if (showreelGridDD.classList.contains("expanded")) {
    showMoreBtnDD.textContent = "Show less";
  } else {
    showMoreBtnDD.textContent = "Show more";
  }
});

const showMoreBtnShowcase = document.getElementById("showMoreBtnShowcase");
const showreelGridShowcase = document.querySelector(".showreel-grid-showcase");
const showcaseCards = showreelGridShowcase.querySelectorAll(".video-card");
if (showcaseCards.length <= 4) {
  showMoreBtnShowcase.style.display = "none";
}

showMoreBtnShowcase.addEventListener("click", () => {
  showreelGridShowcase.classList.toggle("expanded");

  if (showreelGridShowcase.classList.contains("expanded")) {
    showMoreBtnShowcase.textContent = "Show less";
  } else {
    showMoreBtnShowcase.textContent = "Show more";
  }
});

const photoItems = document.querySelectorAll(".photo-item");

const observers = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observers.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.2 });

photoItems.forEach(item => {
  observers.observe(item);
});

const showMoreBtnGallery = document.getElementById("showMoreBtnGallery");
const showreelGridGallery = document.querySelector(".still-gallery");

showMoreBtnGallery.addEventListener("click", () => {
  showreelGridGallery.classList.toggle("expanded");

  if (showreelGridGallery.classList.contains("expanded")) {
    showMoreBtnGallery.textContent = "Show less";
  } else {
    showMoreBtnGallery.textContent = "Show more";
  }
});

const form = document.getElementById("contact-form");
const thankYouPopup = document.getElementById("thankYouPopup");
const sendBtn = document.getElementById("sendBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Add loading state
  sendBtn.classList.add("loading");
  sendBtn.disabled = true;

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      // Show floating popup
      thankYouPopup.classList.add("show");

      setTimeout(() => {
        thankYouPopup.classList.remove("show");
      }, 5000);

      form.reset();
    } else {
      alert("❌ Oops! Something went wrong. Try again.");
    }
  } catch (error) {
    alert("⚠️ Network error. Please try later.");
  } finally {
    // Remove loading state
    sendBtn.classList.remove("loading");
    sendBtn.disabled = false;
  }
});




