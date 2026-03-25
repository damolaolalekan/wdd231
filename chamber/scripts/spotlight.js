const url = "data/members.json";
const spotlightContainer = document.querySelector("#spotlights");

async function getSpotlights() {
    const response = await fetch(url);
    const data = await response.json();

    displaySpotlights(data);
}

function getMembershipLevel(level) {
    if (level == 3) return { name: "Gold", class: "gold" };
    if (level == 2) return { name: "Silver", class: "silver" };
}

function displaySpotlights(members) {
    spotlightContainer.innerHTML = "";

    const filtered = members.filter(m => m.membership >= 2);

    const random = filtered.sort(() => 0.5 - Math.random());
    const selected = random.slice(0, 3);

    selected.forEach(member => {
        const level = getMembershipLevel(member.membership);

        const card = document.createElement("div");
        card.classList.add("business-card");

        card.innerHTML = `
            <span class="badge ${level.class}">${level.name}</span>
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Visit</a>
        `;

        spotlightContainer.appendChild(card);
    });
}

if (spotlightContainer) {
    getSpotlights();
}