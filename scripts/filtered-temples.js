document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");

 menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
  const isExpanded = nav.classList.contains("show");
  menuBtn.setAttribute("aria-expanded", isExpanded);
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

const grid = document.querySelector(".grid-container"); grid.replaceChildren();
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x640/aba-nigeria-temple-lds-248714-wallpaper.jpg",
    loading: "lazy",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x640/manti-temple-759210-wallpaper.jpg",
    loading: "lazy",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/2018/400x640/Payson-Utah-Temple01.jpg",
    loading: "lazy",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_3.jpg",
    loading: "lazy",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-3.jpeg",
    loading: "lazy",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    loading: "lazy",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x640/mexico-city-temple-exterior-1522377-wallpaper.jpg",
    loading: "lazy",
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40710,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x640/8-Rome-Temple-2160339.jpg",
    loading: "lazy",
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52790,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x640/tokyo_japan_temple-evening.jpeg",
    loading: "lazy",
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior-evening-1905504.jpg",
    loading: "lazy",
  },
  {
    templeName: "Monterrey Mexico",
    location: "Monterrey, Mexico",
    dedicated: "2000, December, 17",
    area: 44000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/monterrey-mexico/400x400/monterrey-mexico-temple-lds-126690-wallpaper.jpg",
    loading: "lazy",
  },
  {
    templeName: "Nuku'alofa Tonga",
    location: "Nuku'alofa, Tonga",
    dedicated: "2019, December, 15",
    area: 44000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nukualofa-tonga/400x400/nukualofa-tonga-temple-lds-158875-wallpaper.jpg",
    loading: "lazy",
  }
];

createTempleCard(temples);

// Navigation Link Event Listeners
const oldTemplesLink = document.querySelector("#oldTemples");
const newTemplesLink = document.querySelector("#newTemples");
const largeTemplesLink = document.querySelector("#largeTemples");
const smallTemplesLink = document.querySelector("#smallTemples");
const homeLink = document.querySelector("#home");


function clearGrid() {
  document.querySelector(".grid-container").replaceChildren();
}

// Home - Show all temples
homeLink.addEventListener("click", () => {
  clearGrid();
  createTempleCard(temples);
});

// Old Temples - Dedicated before 1975
oldTemplesLink.addEventListener("click", () => {
  let oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1975;
  });
  clearGrid();
  createTempleCard(oldTemples);
});

// New Temples - Dedicated 1975 or later
newTemplesLink.addEventListener("click", () => {
  let newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year >= 1975;
  });
  clearGrid();
  createTempleCard(newTemples);
});

// Large Temples - Area > 10,000 sq ft
largeTemplesLink.addEventListener("click", () => {
  let largeTemples = temples.filter(temple => temple.area > 10000);
  clearGrid();
  createTempleCard(largeTemples);
});

// Small Temples - Area <= 10,000 sq ft
smallTemplesLink.addEventListener("click", () => {
  let smallTemples = temples.filter(temple => temple.area <= 10000);
  clearGrid();
  createTempleCard(smallTemples);
});

// Function to Create Cards
function createTempleCard(filteredTemples) {
  filteredTemples.forEach(temple => {
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
    img.setAttribute("alt", temple.alt);
    img.setAttribute("loading", temple.loading);
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".grid-container").appendChild(card);
  });
}
