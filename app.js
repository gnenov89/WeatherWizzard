// Init weather object
const weather = new Weather('Boston', 'MA');
// const weather = new Weather;

// Init ui 
const ui = new UI;
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Test to change location
// weather.changeLocation('25.7617', '80.1918');

function getWeather(){
  weather.getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results);
    })
    .catch(err => console.log(err));
}