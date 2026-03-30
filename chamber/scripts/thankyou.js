// Get URL parameters
const params = new URLSearchParams(window.location.search);

// Display values
document.querySelector("#firstName").textContent = params.get("first-name");
document.querySelector("#lastName").textContent = params.get("last-name");
document.querySelector("#email").textContent = params.get("email");
document.querySelector("#phone").textContent = params.get("phone");
document.querySelector("#organization").textContent = params.get("organization");
document.querySelector("#timestamp").textContent = params.get("timestamp");

// Footer
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
    "Last Modified: " + document.lastModified;