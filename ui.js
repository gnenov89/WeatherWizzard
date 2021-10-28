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
        this.feelsLike = document.getElementById('w-feels-like');
    }

    paint(weather) {
        this.location.textContent = weather.current;
        this.desc.textContent = weather.weather;

    }
}