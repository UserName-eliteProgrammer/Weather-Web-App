console.log("Included");

let cityName = "Jaipur";
const key = "ed9e7e50a9bc8b5df3f134e8e5848bae";
sendRequest();

const inp = document.getElementById("inp");
inp.addEventListener("input", () => {
  setTimeout(() => {
    let inpVal = inp.value;
    inpVal = inpVal.charAt(0).toUpperCase() + inpVal.substr(1);
    cityName = inpVal;
    sendRequest();
  }, 3500);
});

function sendRequest() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;

  const reqObj = new XMLHttpRequest();
  reqObj.open("GET", url, true);

  reqObj.onload = function () {
    let json = JSON.parse(reqObj.responseText);
    console.log(json);
    let temp = json.main.temp;
    let weather = json.weather[0].main;
    let humidity = json.main.humidity;
    let pressure = json.main.pressure;
    let city = json.name;

    let infoBox = document.getElementById("info");
    infoBox.innerHTML = `
    <h2>${(temp - 273.15).toFixed(2)}&#176;C</h2>
    <ul>
    <li><span>Weather - </span>${weather}
    <li><span>Humidity - </span>${humidity}%</li> 
    <li><span>Pressure - </span>${pressure} hPa</li>
    <li><span>City - </span>${city}</li></ul>`;
  };

  reqObj.send();
}
