function Add(model,city){
    const {cities, temperatures,tMax,tMin} = model
    cities.push(city)
    temperatures.push()//aca debe ir la temperatura actual
    tMax.push()//temperatura maxima
    tMin.push()//temperatura minima
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

function Update(model,city){
    const {cities, temperatures,tMax,tMin} = model
    let index = cities.indexOf(city)
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
const AllFuction ={
    'Add City'   : Add,
    'Update City': Update,
    'Delete City': Delete

}

module.exports = {
    AllFuction,
    Delete,
    Update,
    Add
}