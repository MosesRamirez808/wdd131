// === Footer: Year and Last Modified ===
const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.lastModified;
lastModifiedSpan.textContent = lastModified;

// === Weather Data ===
const temperature = 68; // Static temperature in °F
const windSpeed = 8;    // Static wind speed in mph

const tempSpan = document.getElementById("temperature");
const windSpan = document.getElementById("windspeed");
const chillSpan = document.getElementById("windchill");

tempSpan.textContent = temperature;
windSpan.textContent = windSpeed;

// === Wind Chill Calculation ===
function calculateWindChill(tempF, speedMph) {
  // Formula for wind chill (°F)
  return Math.round(
    35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16)
  );
}

// === Check conditions and display ===
if (temperature <= 50 && windSpeed > 3) {
  const windChill = calculateWindChill(temperature, windSpeed);
  chillSpan.textContent = `${windChill} °F`;
} else {
  chillSpan.textContent = "N/A";
}
