class Weather {
    constructor(city, country) {
      this.apiKey = 'a151594aabbd859764c5db4204cd350d'
      this.city = city;
    //   this.country = country;
      this.state = state;
    }
  
    //fetch weather from api
    async getWeather() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}&units=imperial`
      )
  
      const responseData = await response.json()
    //   console.log(responseData)
  
      return responseData
    }
  
    //change location
    changeLocation(city, country) {
      this.city = city;
      this.country = country;
    }
  }