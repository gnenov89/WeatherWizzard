class Weather {
    constructor(city, country) {
      this.apiKey = '62e5d0e78706fbb9d742281324e33fc8';
      this.city = city;
    //   this.country = country;
      this.country = country;
    }
  
    //fetch weather from api
    async getWeather() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=imperial`
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