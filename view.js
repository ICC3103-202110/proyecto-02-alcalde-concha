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
//to ask about the amount
function listForm(model){
    
    const { cities } = model
    
    return inquirer.prompt({
        name: city,
        type: 'list',
        message: "which city do you want to delete?",
        choices: cities
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
                    return true
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