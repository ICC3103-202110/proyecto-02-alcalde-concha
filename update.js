
function Add(model, city, data) {
    const { cities, temperatures, tMax, tMin } = model
    
    if (data.message != 'city not found') {
        cities.push(city)
        temperatures.push(data.main.temp)
        tMax.push(data.main.temp_max)
        tMin.push(data.main.temp_min)
    }
    return{
        ...model,
        cities: cities,
        temperatures: temperatures,
        tMax: tMax,
        tMin: tMin
    }
}

function Delete(model,city){ //erase city and its temperatures
    const {cities, temperatures,tMax,tMin} = model
    let index = cities.indexOf(city)
    cities.splice(index,1)
    temperatures.splice(index,1)
    tMax.splice(index,1)
    tMin.splice(index,1)
    return{
        ...model,
        cities: cities,
        temperatures: temperatures,
        tMax: tMax,
        tMin: tMin
    }
}

function Update(model,city,data){
    const {cities, temperatures,tMax,tMin} = model
    let index = cities.indexOf(city)
    temperatures[index]= data.main.temp//enter new temperature
    tMax[index]= data.main.temp_max//enter new temperature max
    tMin[index]=  data.main.temp_min//enter new temperature min
    return{
        ...model,
        cities: cities,
        temperatures: temperatures,
        tMax: tMax,
        tMin: tMin
    }
}
const AllFunction ={
    'Add City'   : Add,
    'Update City': Update,
    'Delete City': Delete

}

module.exports = {
    AllFunction
}