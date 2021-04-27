// Functions

function getWeatherByZip(apiKey, zip, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    return getWeather(path)

}

function getWeatherByCity(apiKey, city, units = 'imperial') {
    const path = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
    return getWeather(path)

}

function getWeatherByGeo(apiKey, lat, lon, units = 'imperial') {
    const path = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
    return getWeather(path)

}


async function getWeather(path) {
    
    try {
        // try something
        const res = await fetch(path)
        const json = await res.json()
        const weatherData = {
            code: json.cod,
            name: json.name,
            temp: json.main.temp,
            feels_like: json.main.feels_like,
            icon: json.weather[0].icon,
            description: json.weather[0].description
        }
        return weatherData
    } catch(err) {
        // handle errors
        return err
    }

}

export {
    getWeatherByZip,
    getWeatherByCity,
    getWeatherByGeo
}