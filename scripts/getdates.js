// Set the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Set the last modified date
const lastModified = document.lastModified;
document.getElementById("lastmodified").textContent = `Last modified: ${lastModified}`;