//key:   cb768f5f884d90e3545b9e5fb7980431


const fetch = require("node-fetch");

    
async function getData(city) {
    const key = 'cb768f5f884d90e3545b9e5fb7980431'
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    const data = await response.json()
    console.log(data.message)

}
  

getData('S') //city not found
getData('Santiago') // undefined
//getData('Santiago').then(value => console.log("Temp: ", value))
//getData('Santiago').then(value => console.log("Temp Max: ",value.tempMax))
//getData('Santiago').then(value => console.log("Temp Min: ",value.tempMin))
