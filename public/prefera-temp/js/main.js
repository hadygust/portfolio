/* ==========================================================================
   PREFERA DESIGN STUDIO - JAVASCRIPT LOGIC & INTERACTIONS (REVISED)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initHeroSlider();
  initPortfolioFilters();
  initContactForm();
  initMobileMenu();
});

// 1. Sticky Header scroll effect
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// 2. Hero Background Image Carousel
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length <= 1) return;

  let currentIdx = 0;
  setInterval(() => {
    slides[currentIdx].classList.remove('active');
    currentIdx = (currentIdx + 1) % slides.length;
    slides[currentIdx].classList.add('active');
  }, 5000);
}

// 3. Portfolio Category Filtering (12 Featured on 'All Works', Full entries on category tabs)
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  // Initial state: show only featured projects (12 projects)
  applyFilter('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      applyFilter(filterValue);
    });
  });

  function applyFilter(filterValue) {
    projectCards.forEach(card => {
      const isFeatured = card.getAttribute('data-featured') === 'true';
      const cardCat = card.getAttribute('data-category');

      let shouldShow = false;
      if (filterValue === 'all') {
        shouldShow = isFeatured; // Exactly 12 featured projects
      } else {
        shouldShow = (cardCat === filterValue); // All projects in this category (>= 6)
      }

      if (shouldShow) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 50);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 250);
      }
    });
  }
}

// 5. Contact form -> WhatsApp
function initContactForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;

  const WA_NUMBER = "6287880933820"

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName').value;
    const projectType = document.getElementById('formType').value;
    const location = document.getElementById('formLocation').value;
    const message = document.getElementById('formMessage').value;

    const waText = encodeURIComponent(
      `Hello Prefera Design Studio,\n\n` +
      `My name is ${name}.\n` +
      `I would like to consult regarding a ${projectType} project.\n` +
      `Location & Target Date: ${location || 'Not specified'}\n\n` +
      `Project Brief:\n${message}`
    );

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${waText}`;

    const confirmed = confirm(
      `Thank you, ${name}! Would you like to send this inquiry directly to Prefera Design Studio via WhatsApp?`
    );

    if (confirmed) {
      window.open(waUrl, '_blank');
    } else {
      alert('Thank you! Your inquiry has been recorded. Prefera Design Studio will be in touch shortly.');
      form.reset();
    }
  });
}

// 6. Mobile Navigation Menu Toggle
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-open');
    const icon = toggleBtn.querySelector('i');
    if (icon) {
      if (navMenu.classList.contains('mobile-open')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    }
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('mobile-open');
      const icon = toggleBtn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-bars';
    });
  });
}
