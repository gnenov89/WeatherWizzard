// Init storage
const storage = new Storage;
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.coutry);
// const weather = new Weather;

// Init ui 
const ui = new UI;
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event 
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    // Test to change location
    weather.changeLocation(city, country);

    // Set location in local storage
    storage.setLocationData(city, country);

    getWeather();

    $('#locModal').modal('hide');

}); 



function getWeather(){
  weather.getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results);
    })
    .catch(err => console.log(err));
}