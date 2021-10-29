// Init weather object
const weather = new Weather('Boston', 'MA');
// const weather = new Weather;

// Init ui 
const ui = new UI;
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event 
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // Test to change location
    weather.changeLocation('Miami', 'FL');

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