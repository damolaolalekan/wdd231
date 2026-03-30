// Timestamp
document.querySelector("#timestamp").value = new Date().toISOString();

function closeModal(id) {
  document.getElementById(id).close(); 
}

function openModal(id) {
  console.log("Opening:", id);
  document.getElementById(id).showModal();
}


const params = new URLSearchParams(window.location.search);

if (results) {
  const params = new URLSearchParams(window.location.search);

  results.innerHTML = `

  <p><strong>First Name:</strong> ${params.get("first-name")}</p>
  <p><strong>Last Name:</strong> ${params.get("last-name")}</p>
  <p><strong>Email:</strong> ${params.get("email")}</p>
  <p><strong>Phone:</strong> ${params.get("phone")}</p>
  <p><strong>Business:</strong> ${params.get("organization")}</p>
  <p><strong>Date:</strong> ${params.get("timestamp")}</p>
`;
}