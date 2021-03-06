class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc'); 
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
        this.feelsLike = document.getElementById('w-w-feels-like');
    }

    paint(weather) {
        this.location.textContent = `${weather.name}`;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp} ℉`;
        // this.icon.setAttribute('src', weather.current.weather[0]);
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} ℉`;
        this.dewpoint.textContent = `Wind Direction: ${weather.wind.deg} degrees`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} meters/sec`;









    }
}