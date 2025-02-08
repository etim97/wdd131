// Set the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Display last modified date
document.getElementById("last-modified").textContent = `Last Modified: ${document.lastModified}`;

// Handle the mobile navigation menu
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector("nav ul");

menuToggle.addEventListener("change", function () {
    menu.style.display = menuToggle.checked ? "flex" : "none";
});

// Ensure menu is visible on larger screens
window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        menu.style.display = "flex";
    } else if (!menuToggle.checked) {
        menu.style.display = "none";
    }
});
