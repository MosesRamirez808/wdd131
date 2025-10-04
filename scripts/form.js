document.addEventListener("DOMContentLoaded", function () {
  // Update last modification time
  const lastModElem = document.querySelector('.last-modification');
  if (lastModElem) {
    lastModElem.textContent = `Last modified: ${new Date(document.lastModified).toLocaleString()}`;
  }

  // WebSocket connection
  const socket = new WebSocket("ws://localhost:3000");
  socket.onopen = () => {
    console.log("WebSocket connection established.");
  };

  // Product list (can be used later to populate the dropdown dynamically if needed)
  const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
  ];

  // Form validation
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      // Validate checkbox group (features)
      const checked = document.querySelectorAll('input[name="features"]:checked').length;
      if (checked === 0) {
        alert('Please select at least one feature.');
        e.preventDefault();
        return;
      }

      // Validate star rating (radio buttons)
      const ratingChecked = document.querySelector('input[name="rating"]:checked');
      if (!ratingChecked) {
         alert('Please select an overall star rating.');
         e.preventDefault();
         return;
      }
    });
  }
});
