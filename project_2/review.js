// Set current year in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set last modified date
document.getElementById('last-modified').textContent = `Last modified: ${document.lastModified}`;

// Product Data
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];
  
  // Function to Populate Product Select Options
  function populateProducts() {
    const selectElement = document.querySelector("select[name='product']");
    
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      selectElement.appendChild(option);
    });
  }
  
  // Function to Track Review Count
  function trackReviewCount() {
    let reviewCount = localStorage.getItem("reviewCount");
    
    if (!reviewCount) {
      reviewCount = 0;
    }
    
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
  
    // Display the review count (optional)
    document.getElementById("reviewCounter").textContent = `Reviews submitted: ${reviewCount}`;
  }
  
  // Run functions when the page loads
  document.addEventListener("DOMContentLoaded", () => {
    populateProducts();
    trackReviewCount();
  });
  