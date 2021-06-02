function Add(model,city,data){
    const {cities, temperatures,tMax,tMin} = model
    cities.push(city)
    temperatures.push(data.main.temp)//aca debe ir la temperatura actual
    tMax.push(data.main.temp_max)//temperatura maxima
    tMin.push(data.main.temp_min)//temperatura minima
    return{
        ...model,
        cities: cities,
        temperatures: temperatures,
        tMax: tMax,
        tMin: tMin
    }
}

function Delete(model,city){
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
    cities.splice(index,1, city)
    temperatures.splice(index,1, data.main.temp)
    tMax.splice(index,1,data.main.temp_max)
    tMin.splice(index, 1, data.main.temp_min)
    //temperatures[index]=//ingrese nueva temperatura
    //tMax[index]=//ingrese nueva temperatura maxima 
    //tMin[index]= //ingrese nueva temperatura minima
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