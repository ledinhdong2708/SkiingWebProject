


const searchCity = document.querySelector('.search-city')

searchCity.addEventListener('change', (e) => {
    var weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=3a0097ed5e404ef3eeedb86e0cd04ca2`
    var data = fetch(weatherApi)
        .then(function (reponse) {
            return reponse.json();
        })
        .then(function (posts) {
            var cityName = document.querySelector('.city');
            var countryName = document.querySelector('.country')
            var weatherCondition = document.querySelector('.weather-condition')
            var temperature = document.querySelector('.temperature')
            var vison = document.querySelector('.vison')
            var wind = document.querySelector('.wind')
            var humidity = document.querySelector('.humidity')
    
            temperature.innerText = Math.round((posts.main.temp - 273.15)) + '°C'
            cityName.innerText = posts.name 
            countryName.innerText = ', ' + posts.sys.country
            weatherCondition.innerHTML = posts.weather[0].description
            vison.innerHTML = posts.visibility + 'm'
            wind.innerHTML = posts.wind.speed + 'm/s'
            humidity.innerHTML = posts.main.humidity + '%'
        });
})



// function setDate() {
//     const date = new Date();
//     const dateFormat = new Intl.DateTimeFormat('default', {
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric',
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric',
//     })
//     console.log(dateFormat.format(date))
//     document.querySelector('.date-time').innerText = dateFormat.format(date)
// }
// setDate();
