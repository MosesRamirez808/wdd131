// temples.js
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = document.lastModified;

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('mainNav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('show');

 
  if (nav.classList.contains('show')) {
    menuBtn.textContent = '✖';
  } else {
    menuBtn.textContent = '☰';
  }
});
