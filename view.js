const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const {initModel} = require('./model')
const { range } = require('rxjs')
 
//show title
function getTitle(){ 
    return chalk.green(
        figlet.textSync(
            'Weather App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

//to show the rectangle(table)
function getTable(model){
    const {cities,temperatures} = model
    let count = 0
    let table = Array
    while(count<cities.length){
        table[count]={city: cities[count] , temperature: temperatures[count]} // en el paradigma no se puede while
        count+=1;
    }
    return table
}

//join table and title, to export only one thing
function allView(model){
    return{
    title: getTitle(),
    table: getTable(model)
}}
//hasta aca todo bien
/*
//to ask about the amount
function listForm(model){
    let table = Array
    const {cities} = model
    while(count<cities.length){ // en el paradigma no se puede while
        table[count]=cities[count]
        count+=1;
    }
    //No es necesario el while, basta con esto creo
    // const choices = cities
    
    const choices = table
    return inquirer.prompt({
        name: city,
        type: 'list',
        message: "which city do you want to delete?",
        choices: choices
    })
}
*/
function listForm(model){
    const {cities} = model
    const message =  "which city do you want to delete?"
    const choices = cities
    return inquirer.prompt({
        name: 'city',
        type: 'list',
        message: message,
        choices: choices
    })
}

//to ask about the tip percentage
function inputNewCity(model){
    const {cities} = model
    const message = 'enter a new city'
    return inquirer.prompt([
        {
            name: 'city',
            type: 'city',
            message: message,
            validate: function(value){
                if(cities.indexOf(value) !=-1){ 
                    return true // no recuerdo si era value o true // Hola: Es value
                } else {
                    return 'Enter anotther city. This city is in the list'
                }
            }
        }
    ])
}


module.exports = {
    allView, 
    inputNewCity,
    listForm
}