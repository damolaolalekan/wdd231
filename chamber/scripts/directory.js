const url = "data/members.json";

const membersContainer = document.querySelector("#members");
const spotlightContainer = document.querySelector("#spotlights");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data);
    displaySpotlights(data);
}

function getMembershipLevel(level) {
    if (level == 3) return { name: "Gold", class: "gold" };
    if (level == 2) return { name: "Silver", class: "silver" };
    return { name: "Member", class: "member" };
}

function createCard(member) {
    const level = getMembershipLevel(member.membership);

    const card = document.createElement("div");
    card.classList.add("business-card");

    card.innerHTML = `
        <span class="badge ${level.class}">${level.name}</span>
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit</a>
    `;

    return card;
}

function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach(member => {
        membersContainer.appendChild(createCard(member));
    });
}

// ⭐ SPOTLIGHT (Gold & Silver only)
function displaySpotlights(members) {
    const filtered = members.filter(m => m.membership >= 2);

    // shuffle
    const random = filtered.sort(() => 0.5 - Math.random());

    const selected = random.slice(0, 3);

    selected.forEach(member => {
        spotlightContainer.appendChild(createCard(member));
    });
}

getMembers();


// GRID / LIST
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");
const container = document.querySelector(".business-container");

gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});


