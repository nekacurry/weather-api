// Functions
async function getWeather(zip, apiKey, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    
    try {
        // try something
        const res = await fetch(path)
        const json = await res.json()
        const weatherData = {
            code: json.cod,
            coord: json.coord,
            name: json.name,
            temp: json.main.temp,
            feels_like: json.main.feels_like,
            icon: json.weather[0].icon,
            temp_min: json.main.temp_min,
            temp_max: json.main.temp_max,
            description: json.weather[0].description
        }
        return weatherData
    } catch(err) {
        // handle errors
        return err
    }

}

export {
    getWeather
}