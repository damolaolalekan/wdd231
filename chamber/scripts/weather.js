const apiKey = "fc1cd0314b7165df4762048a69575d56";
const city = "Osogbo";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

const currentContainer = document.querySelector("#weather-current");
const forecastContainer = document.querySelector("#weather-forecast");

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();

    displayCurrent(data);
    displayForecast(data);
}

function displayCurrent(data) {
    const current = data.list[0];

    currentContainer.innerHTML = `
        <p>${current.main.temp}°F</p>
        <p>${current.weather[0].description}</p>
    `;
}

function displayForecast(data) {
    forecastContainer.innerHTML = "";

    const filtered = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    filtered.slice(0, 3).forEach(day => {
        forecastContainer.innerHTML += `
            <p>${new Date(day.dt_txt).toLocaleDateString()} - ${day.main.temp}°F</p>
        `;
    });
}

getWeather();