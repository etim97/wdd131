// Set current year in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set last modified date
document.getElementById('last-modified').textContent = `Last modified: ${document.lastModified}`;

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Selecting elements
    const form = document.querySelector("#data-form");
    const nameInput = document.querySelector("#name");
    const messageInput = document.querySelector("#message");
    const submitBtn = document.querySelector("#submitBtn");
    const output = document.querySelector("#output");
    const clearBtn = document.querySelector("#clearBtn");
    const menuToggle = document.querySelector("#menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    
    // Load saved data from localStorage
    function loadMessages() {
        const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
        output.innerHTML = "";
        savedMessages.forEach(msg => {
            displayMessage(msg.name, msg.message);
        });
    }

    // Display message dynamically
    function displayMessage(name, message) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message-item");
        messageDiv.innerHTML = `<strong>${name}:</strong> ${message}`;
        output.appendChild(messageDiv);
    }

    // Form submission event
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (name === "" || message === "") {
            alert("Please enter both name and message.");
            return;
        }
        document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault();
            let name = document.getElementById("name").value;
            document.getElementById("response").innerText = `Thank you, ${name}! Your form has been submitted.`;
        });
        // Save to localStorage
        const messages = JSON.parse(localStorage.getItem("messages")) || [];
        const newMessage = { name, message };
        messages.push(newMessage);
        localStorage.setItem("messages", JSON.stringify(messages));

        // Display message
        displayMessage(name, message);
        form.reset();
    });

    // Clear messages
    clearBtn.addEventListener("click", function () {
        localStorage.removeItem("messages");
        output.innerHTML = "";
    });

    // Conditional branching example (button text change)
    submitBtn.addEventListener("mouseover", function () {
        submitBtn.textContent = "Ready to Submit!";
    });
    submitBtn.addEventListener("mouseleave", function () {
        submitBtn.textContent = "Submit";
    });

    // Object example
    const user = {
        name: "John Doe",
        role: "Visitor",
        greet: function () {
            return `Welcome, ${this.name}! You are a valued ${this.role}.`;
        }
    };
    console.log(user.greet());

    // Array and array methods example
    const colors = ["red", "blue", "green", "yellow"];
    colors.push("purple"); // Add a new color
    console.log(colors.filter(color => color !== "yellow")); // Remove yellow

    // Load saved messages on page load
    loadMessages();

    // Hamburger menu toggle
    menuToggle.addEventListener("change", function () {
        if (menuToggle.checked) {
            navLinks.style.display = "block";
        } else {
            navLinks.style.display = "none";
        }
    });
});
