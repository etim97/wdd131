// Set current year in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set last modified date
document.getElementById('last-modified').textContent = `Last modified: ${document.lastModified}`;

    // Weather data (example)
    const temperature = 10; // Example: 10°C
    const windSpeed = 6; // Example: 6 km/h

    document.getElementById("temperature").textContent = `${temperature}°C`;
    document.getElementById("wind-speed").textContent = `${windSpeed} km/h`;

    // Calculate wind chill if applicable
    function calculateWindChill(temp, wind) {
        if (temp <= 10 && wind > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
        } else {
            return "N/A";
        }
    }

    document.getElementById("wind-chill").textContent = calculateWindChill(temperature, windSpeed) + "°C";

    // Weather icon logic
    const weatherIconContainer = document.querySelector(".weather-icon");
    let weatherIcon = "";

    if (temperature > 20) {
        // Sunny
        weatherIcon = "☀️"; // Sun emoji
    } else if (temperature <= 20 && temperature > 5) {
        // Partly Cloudy
        weatherIcon = "⛅"; // Sun behind cloud
    } else {
        // Cold/Snowy
        weatherIcon = "❄️"; // Snowflake
    }

    weatherIconContainer.textContent = weatherIcon;

