
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.getElementById('lastModified');
if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('mainNav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuBtn.textContent = nav.classList.contains('show') ? '✖' : '☰';
  });
}
