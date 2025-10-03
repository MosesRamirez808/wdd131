document.addEventListener("DOMContentLoaded", function () {
  const lastModElem = document.querySelector('.last-modification');
  if (lastModElem) {
    lastModElem.textContent = `Last modified: ${new Date(document.lastModified).toLocaleString()}`;
  }

  // Your WebSocket code
  const socket = new WebSocket("ws://localhost:3000");
  socket.onopen = () => {
    console.log("WebSocket connection established.");
  };
});
