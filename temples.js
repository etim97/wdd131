// Select the menu toggle input, menu icon, and navigation menu
const menuToggle = document.getElementById('menu-toggle');
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('nav ul');

// Event listener for the hamburger menu toggle
menuIcon.addEventListener('click', () => {
  if (menuToggle.checked) {
    // If the menu is checked, show the menu
    navMenu.style.display = 'flex';
    menuIcon.style.transform = 'rotate(90deg)'; // Optional: Rotate icon when menu is open
  } else {
    // If the menu is unchecked, hide the menu
    navMenu.style.display = 'none';
    menuIcon.style.transform = 'rotate(0deg)'; // Reset rotation
  }
});

// Additional JS code to close the menu when a menu item is clicked
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      menuToggle.checked = false;
      navMenu.style.display = 'none';
      menuIcon.style.transform = 'rotate(0deg)';
    }
  });
});

