// SELECT HTML ELEMENTS IN THE Document
const myTown = document.querySelector("#town");
const myGraphic = document.querySelector("#graphic");
const myDescription = document.querySelector("#description");
const myTemperature = document.querySelector("#temperature");

// CREATE REQUIRES VARIABLES FOR THE URL
const myKey = "fc1cd0314b7165df4762048a69575d56";
const myLat = "5657.1";
const myLon = "-5749";

//CONSTRUCT A FULL URL PATH USING TEMPLATE LITERALS
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=imperial`;

// TRY TO GRAB THE CURRENT WEATHER DATA
async function getWeather() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
        displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
}

 // DISPLAY THE JSON DATA ONTO MY WEB PAGE
function displayResults(data) {
    myTown.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute("src", iconsrc);
    myGraphic.setAttribute("alt", data.weather[0].description);
}

// START THE PROCESS
ApIfetch(myURL);