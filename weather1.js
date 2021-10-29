// class Weather {
//     constructor() {
//         this.apiKey = 'a151594aabbd859764c5db4204cd350d';
//         this.lat = '42.3601'; 
//         this.lon = '71.0589';
//         // Optional for line 14
//         // this.city = city;
//         // this.state = state;
        
//     }

//     // Fetch weather from API 
//     async getWeather() {
//         // const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Boston&appid=a151594aabbd859764c5db4204cd350d`)
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&exclude=minutely,hourly,&units=imperial&appid=${this.apiKey}`)
//         // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Boston,us&zip=02116&appid=a151594aabbd859764c5db4204cd350d`);

//         const responseData = await response.json();
//         // console.log(responseData)
    
//         return responseData
//       }
    
//       //change location
//       changeLocation(lat, lon) {
//         this.lat = lat;
//         this.lon = lon;
//       }
//     }