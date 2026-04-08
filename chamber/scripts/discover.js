import { places } from "../data/places.mjs";

const container = document.querySelector("#discoverGrid");

// DISPLAY CARDS
places.forEach((place, index) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.style.gridArea = `card${index + 1}`;


  // Assign grid area based on index
  card.innerHTML = `

  <h2>${place.name}</h2>

    <figure>
      <img src="${place.image}" alt="Image of ${place.name} in Osogbo" loading="lazy" width="500" height="300">
    </figure>

      <p>${place.description}</p>
      <address>${place.address}</address>
      
  <button>Learn More</button>
`;
  container.appendChild(card);
});


// VISIT MESSAGE (localStorage)
const message = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (days < 1) {
    message.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    message.textContent = "You last visited 1 day ago.";
  } else {
    message.textContent = `You last visited ${days} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);


