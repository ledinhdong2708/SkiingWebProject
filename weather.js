const searchCity = document.querySelector('.search-city')
console.log(searchCity.value)


searchCity.addEventListener('click', () => {
    document.querySelector('.search-label').classList.add('change-position')
})
searchCity.addEventListener('keypress', (e) => {
    if (e.code == 'Enter') {
        var weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=3a0097ed5e404ef3eeedb86e0cd04ca2`
        fetch(weatherApi)
            .then(function (reponse) {
                return reponse.json();
            })
            .then((data) => {

                if (data.cod == '200') {
                    fetchApi(data)

                } else {
                    var wrongInputMessage = document.querySelector('.wrong-input-message')

                    wrongInputMessage.setAttribute("style", "display: block; color:red;")
                    wrongInputMessage.classList.add('shake-message')
                    setTimeout(ledinhdong, 400)
                }

            });
    }
})


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=3a0097ed5e404ef3eeedb86e0cd04ca2`
            console.log()
            fetch(weatherApi)
                .then(function (reponse) {
                    return reponse.json();
                })
                .then(data => { fetchApi(data) })
        });
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function fetchApi(posts) {
    var cityName = document.querySelector('.city');
    var countryName = document.querySelector('.country')
    var weatherCondition = document.querySelector('.weather-condition')
    var temperature = document.querySelector('.temperature')
    var vison = document.querySelector('.vison')
    var wind = document.querySelector('.wind')
    var humidity = document.querySelector('.humidity')
    var time = document.querySelector('.date-time')
    var date = new Date((posts.dt) * 1000)
    var wrongInputMessage = document.querySelector('.wrong-input-message')
    var iconcode = posts.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    var weatherIcon = document.querySelector('#wicon')



    weatherIcon.setAttribute('src', iconurl)
    temperature.innerText = Math.round((posts.main.temp - 273.15)) + '°C'
    cityName.innerText = posts.name
    countryName.innerText = ', ' + posts.sys.country
    weatherCondition.innerHTML = posts.weather[0].description
    vison.innerHTML = posts.visibility + 'm'
    wind.innerHTML = posts.wind.speed + 'm/s'
    humidity.innerHTML = posts.main.humidity + '%'
    time.innerText = date.toLocaleString()
    wrongInputMessage.style.display = 'none'
}
getLocation()
function ledinhdong() {
    document.querySelector('.wrong-input-message').classList.remove('shake-message')
}