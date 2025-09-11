// temples.js

// ========== Dynamic Footer ==========

// Update year in footer
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Update last modified date
const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = document.lastModified;

// ========== Hamburger Menu Toggle ==========

// Get references
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('mainNav');

// Event listener for hamburger toggle
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('show');

  // Toggle between ☰ and ✖
  if (nav.classList.contains('show')) {
    menuBtn.textContent = '✖';
  } else {
    menuBtn.textContent = '☰';
  }
});
