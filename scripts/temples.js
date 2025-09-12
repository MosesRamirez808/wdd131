document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Set current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Set last modified date
  const lastModifiedSpan = document.getElementById('lastModified');
  if (lastModifiedSpan) {
    const modified = new Date(document.lastModified);
    const formatted = `${modified.getMonth() + 1}/${modified.getDate()}/${modified.getFullYear()} ${modified.toLocaleTimeString()}`;
    lastModifiedSpan.textContent = formatted;
  }
});