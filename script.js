// Set the current year and last modified date
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Calculate and display the wind chill factor
function calculateWindChill(temp, windSpeed) {
  // Formula: Wind Chill = 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
  return Math.round(
    13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
  );
}

const temperature = 10; // Static temperature in °C
const windSpeed = 6; // Static wind speed in km/h

if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById("wind-chill").textContent = `${windChill}°C`;
} else {
  document.getElementById("wind-chill").textContent = "N/A";
}
