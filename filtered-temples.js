// Select elements
const menuToggle = document.getElementById('menu-toggle');
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('nav ul');
const mainContent = document.querySelector('main');
const menuSelection = document.querySelector('h1');

// Toggle menu visibility when clicking the hamburger menu
menuIcon.addEventListener('click', () => {
  if (menuToggle.checked) {
    navMenu.style.display = 'flex';
  } else {
    navMenu.style.display = 'none';
  }
});

// Close menu when a link is clicked (for mobile screens)
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      menuToggle.checked = false;
      navMenu.style.display = 'none';
    }
  });
});

// Temple Data Array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
},
{
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
},
{
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
},
{
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
},
{
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},
{
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
},
{
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},
{
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
},
{
    templeName: "Kinshasa DRC Temple",
    location: "Democratic Republic of the Congo",
    dedicated: "2019, April, 14",
    area: 12000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
},
{
    templeName: "Atlanta Georgia Temple",
    location: "Atlanta, Georgia, USA",
    dedicated: "1983, June, 1",
    area: 34500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg"
}
];


// Function to display temple cards
function displayTemples(filteredTemples) {
  mainContent.innerHTML = ''; // Clear previous content
  filteredTemples.forEach(temple => {
    const templeCard = document.createElement('div');
    templeCard.classList.add('temple-card');

    templeCard.innerHTML = `
      <div class="temple-info">
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
      </div>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    mainContent.appendChild(templeCard);
  });
}

// Filter buttons functionality
document.querySelectorAll("nav a").forEach(button => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const filter = event.target.textContent;
    menuSelection.textContent = filter; // Update page title

    let filteredTemples = temples;
    if (filter === "Old") {
      filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
    } else if (filter === "New") {
      filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
    } else if (filter === "Large") {
      filteredTemples = temples.filter(t => t.area > 90000);
    } else if (filter === "Small") {
      filteredTemples = temples.filter(t => t.area < 10000);
    }

    displayTemples(filteredTemples);
  });
});

// Load all temples initially
displayTemples(temples);

// Set current year in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set last modified date
document.getElementById('last-modified').textContent = `Last modified: ${document.lastModified}`;
