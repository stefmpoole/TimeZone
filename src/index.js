let citySelect = document.querySelector("#cities");
let displayDate = document.querySelector("#date");
let displayTime = document.querySelector("#time");

function showSelectedCity(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment().tz(event.target.value).format("hh:mm A");
    let currentDate = moment()
      .tz(event.target.value)
      .format("dddd, MMMM Do YYYY");
    displayDate.innerHTML = `${currentDate}`;
    displayTime.innerHTML = `${currentTime}`;
  }
}

citySelect.addEventListener("change", showSelectedCity);
