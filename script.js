// API Key is:
var apikey = '2c87cb9a37e7739b29266ed92ce11936'


// Fetching Data For Searching Manual Locations

document.getElementById('findTemp').addEventListener('click', () => {
    var cityName = document.getElementById('city').value;
    let citynameapi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`

    function clearValues() { document.getElementById('city').value = ''; }
    fetch(citynameapi)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const temprature = (Math.floor(data.main.temp - 273) + '°C')
            const tempicon = data.weather[0].icon;
            const weatherType = data.weather[0].main
            document.getElementById('temp').innerHTML = `<h1>${temprature}</h1>`
            document.getElementById('weather-type').innerHTML = `<h1 id="weather-type">${weatherType}</h1>`
            document.getElementById('weatherimg').innerHTML = ` <img src="icons/${tempicon}.png" alt="">  `
            clearValues()
        });
})


// Fetchig data for users live location

document.getElementById('mylocation').addEventListener('click', () => {
    window.navigator.geolocation.watchPosition(setPosition);

    function setPosition(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let coordinatesapi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`
        fetch(coordinatesapi)
            .then(response2 => {
                return response2.json();
            })
            .then(data2 => {
                const temprature2 = (Math.floor(data2.main.temp - 273) + '°C');
                const tempicon = data2.weather[0].icon;
                const weatherType = data2.weather[0].main
                document.getElementById('temp').innerHTML = `<h1>${temprature2}</h1>`
                document.getElementById('weatherimg').innerHTML = `<img src="icons/${tempicon}.png" alt="">`
                document.getElementById('weather-type').innerHTML = `<h1 id="weather-type">${weatherType}</h1>`
            })
    }
})
