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

displayTime();
setInterval(displayTime, 1);

let citySelect = document.querySelector("#cities");

function showSelectedCity(event) {
  let selectedLocation = document.querySelector("#location");
  let place = event.target.value;
  let cityName = place.replace("_", " ").split("/")[1];

  if (place.length > 0) {
    let currentTime = moment()
      .tz(place)
      .format("hh:mm:ss [<small>]A[</small>]");
    let currentDate = moment().tz(place).format("dddd, MMMM Do YYYY");

    selectedLocation.innerHTML = ` <div class="displayCities">
            <div>
            <h2>${cityName}</h2>
              <div class="date"><h2 id="date">${currentDate}</h2></div>
            </div>
            <div class="time"><h4 id="time">${currentTime}</h4></div>
          </div>`;
  }
}

citySelect.addEventListener("change", showSelectedCity);
