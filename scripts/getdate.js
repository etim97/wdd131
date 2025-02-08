// Set current year
const currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = new Date().getFullYear();

// Set last modified date
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
