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

  const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
});

