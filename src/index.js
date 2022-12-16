function displayTime() {
  let newYorkElement = document.querySelector("#new-york");
  let displayDateNewYork = newYorkElement.querySelector("#date");
  let displayTimeNewYork = newYorkElement.querySelector("#time");
  let newYorkTime = moment().tz("America/New_York");

  displayDateNewYork.innerHTML = newYorkTime.format("dddd, MMMM Do YYYY");
  displayTimeNewYork.innerHTML = newYorkTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let londonElement = document.querySelector("#london");
  let displayDateLondon = londonElement.querySelector("#date");
  let displayTimeLondon = londonElement.querySelector("#time");
  let londonTime = moment().tz("Europe/Paris");

  displayDateLondon.innerHTML = londonTime.format("dddd, MMMM Do YYYY");
  displayTimeLondon.innerHTML = londonTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let tokyoElement = document.querySelector("#tokyo");
  let displayDatetokyo = tokyoElement.querySelector("#date");
  let displayTimetokyo = tokyoElement.querySelector("#time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  displayDatetokyo.innerHTML = tokyoTime.format("dddd, MMMM Do YYYY");
  displayTimetokyo.innerHTML = tokyoTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

function showSelectedCity(event) {
  let citySelection = event.target.value;
  let cityName = citySelection.replace("_", " ").split("/")[1];

  clearInterval(interval);

  interval = setInterval(() => {
    setCityInterval(citySelection, cityName);
  }, 1000);
}

function setCityInterval(citySelection, cityName) {
  let selectedLocation = document.querySelector("#location");
  let currentDate = moment().tz(citySelection).format("dddd, MMMM Do YYYY");
  let currentTime = moment()
    .tz(citySelection)
    .format("hh:mm:ss [<small>]A[</small>]");

  if (citySelection === "current") {
    citySelection = moment.tz.guess();
    cityName = citySelection.replace("_", " ").split("/")[1];
  }

  if (citySelection.length > 0) {
    selectedLocation.innerHTML = ` <div class="displayCities">
            <div>
            <h2>${cityName}</h2>
              <div class="date"><h2 id="date">${currentDate}</h2></div>
            </div>
            <div class="time"><h4 id="time">${currentTime}</h4></div>
          </div>`;
  } else {
    location.reload();
  }
}

let interval;
displayTime();
interval = setInterval(displayTime, 1000);

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", showSelectedCity);
