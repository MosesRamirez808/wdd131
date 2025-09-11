const lastModifiedSpan = document.getElementById('lastModified');
if (lastModifiedSpan) {
  const modified = new Date(document.lastModified);
  const formatted = `${modified.getMonth() + 1}/${modified.getDate()}/${modified.getFullYear()} ${modified.toLocaleTimeString()}`;
  lastModifiedSpan.textContent = formatted;
}