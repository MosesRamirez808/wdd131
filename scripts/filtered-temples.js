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
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5086.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-45825.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-27360.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-26454.jpg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12729.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060.jpg"
    },
    // New temple objects
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 40710,
      imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3545.jpg"
   },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 52790,
      imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-27489.jpg"
    },
    {
      templeName: "Paris France",
      location: "Le Chesnay, France",
      dedicated: "2017, May, 21",
      area: 44000,
      imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2054.jpg"
    },
    {
      templeName: "Monterrey Mexico",
      location: "Monterrey, Mexico",
      dedicated: "2000, December, 17",
      area: 44000,
      imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/monterrey-mexico-temple/monterrey-mexico-temple-46835.jpg"
    },
    {
      templeName: "Nuku'alofa Tonga",
      location: "Nuku'alofa, Tonga",
      dedicated: "2019, December, 15",
      area: 44000,
      imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/nuku'alofa-tonga-temple/nuku'alofa-tonga-temple-12094.jpg"
    }
  ];

createTempleCard(temples);

const oldTemplesLink = document.querySelector("#oldTemples");
const newTemplesLink = document.querySelector("#newTemples");
const largeTemplesLink = document.querySelector("#largeTemples");
const smallTemplesLink = document.querySelector("#smallTemples");
const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", () => {
  document.querySelector(".grid-container").innerHTML = "";
  createTempleCard(temples);
});
oldTemplesLink.addEventListener("click", () => {
  let oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1975;
  });
    document.querySelector(".grid-container").innerHTML = "";
    createTempleCard(oldTemples);
});
newTemplesLink.addEventListener("click", () => {
  let newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year >= 1975;
  });  
 
  document.querySelector(".grid-container").innerHTML = "";
  createTempleCard(newTemples);
});
largeTemplesLink.addEventListener("click", () => {
  let largeTemples = temples.filter(temple => temple.area > 10000);
  
  document.querySelector(".grid-container").innerHTML = "";
  createTempleCard(largeTemples);
});
smallTemplesLink.addEventListener("click", () => {
  let smallTemples = temples.filter(temple => temple.area <= 10000);

  document.querySelector(".grid-container").innerHTML = "";
  createTempleCard(smallTemples);
});

function createTempleCard(filteredTemples) {
  filteredTemples.forEach(temple => {
    // Create elements
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".grid-container").appendChild(card);

  });
}