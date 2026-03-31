// Get URL parameters
const params = new URLSearchParams(window.location.search);

// Get results container
const results = document.querySelector("#results");

// Display form data
if (results) {
  results.innerHTML = `
    <p><strong>First Name:</strong> ${params.get("first-name")}</p>
    <p><strong>Last Name:</strong> ${params.get("last-name")}</p>
    <p><strong>Email:</strong> ${params.get("email")}</p>
    <p><strong>Phone:</strong> ${params.get("phone")}</p>
    <p><strong>Business:</strong> ${params.get("organization")}</p>
    <p><strong>Date:</strong> ${params.get("timestamp")}</p>
  `;
}

// Footer
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
  "Last Modified: " + document.lastModified;