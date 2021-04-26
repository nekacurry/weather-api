// Functions
function getWeather(zip, apiKey, successCallback, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    

    fetch(path)
        .then( res => res.json())
        .then( json => successCallback(json))
        .catch( err => console.log(err.message))

}
export {
    getWeather
}