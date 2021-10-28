class Weather {
    constructor() {
        this.apiKey = 'a151594aabbd859764c5db4204cd350d';
        this.lat = '42.3601'; 
        this.lon = '71.0589';
        // this.city = city;
        // this.state = state;
        // 42.3601&lon=71.0589
    }

    // Fetch weather from API 
    async getWeather() {
        // const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}}&appid=${this.apiKey}}`)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${this.apiKey}`)

        const responseData = await response.json();
        // console.log(responseData)
    
        return responseData
      }
    
      //change location
      changeLocation(city, country) {
        this.city = city
        this.country = country
      }
    }