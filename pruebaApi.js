//key:   cb768f5f884d90e3545b9e5fb7980431


const fetch = require("node-fetch");

    
async function getData(city) {
    const key = 'cb768f5f884d90e3545b9e5fb7980431'
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    const data = await response.json()
    return {
        temp: data.main.temp,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,
    }
}
  


getData('Santiago').then(value => console.log("Temp: ", value.temp))
getData('Santiago').then(value => console.log("Temp Max: ",value.tempMax))
getData('Santiago').then(value => console.log("Temp Min: ",value.tempMin))