// Functions
async function getWeather(zip, apiKey, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    
    try {
        const res = await fetch(path)
        const json = await res.json()
        return json
    } catch(err) {
        return err
    }

}

export {
    getWeather
}