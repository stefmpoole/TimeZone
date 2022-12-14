let citySelect = document.querySelector("#cities");

let newYorkTime = moment()
  .tz("America/New_York")
  .format("[It is] dddd, MMMM Do YYYY hh:mm A [in America/New York]");

let athensTime = moment()
  .tz("Europe/Athens")
  .format("[It is] dddd, MMMM Do YYYY hh:mm A [in Greece/Athens]");

let sanFranciscoTime = moment()
  .tz("US/Pacific")
  .format("[It is] dddd, MMMM Do YYYY hh:mm A [in America/San Francisco]");

function showSelectedCity(event) {
  if (event.target.value === "new-york") {
    alert(newYorkTime);
  }
  if (event.target.value === "athens") {
    alert(athensTime);
  }
  if (event.target.value === "san-francisco") {
    alert(sanFranciscoTime);
  }
}

citySelect.addEventListener("change", showSelectedCity);
