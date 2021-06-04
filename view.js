const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const {initModel} = require('./model')
const { range } = require('rxjs')
const { Table } = require('console-table-printer')
 
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
    let output = []
    addTable(output,model,0)
    console.log(output)
    return output
}
function addTable(output, model, value) {
    const { cities, temperatures, tMax, tMin } = initModel
    if (value == 0) {
        output.push({
            'city': `${cities[value]}`,
             'temp': `${temperatures[value]}`,
              'Max': `${tMax[value]}`,
               'Min': `${tMin[value]}`
        })
    }
    else {
        if (value >= cities.length) { return output }
        output.push({
            'city': `${cities[value]}`,
             'temp': `${temperatures[value]}`,
              'Max': `${tMax[value]}`,
               'Min': `${tMin[value]}`
        })
        
    }
    value+=1
    addTable(output,model,value)
}

//join table and title, to export only one thing
function allView(model){
    return{
    title: getTitle(),
    table: getTable(model)
}}

function DeleteCity(model){ //to delete a city
    const {cities} = model
    const message =  "Which city do you want to delete?"
    const choices = cities
    return inquirer.prompt({
        name: 'city',
        type: 'list',
        message: message,
        choices: choices
    })
}

function UpdateCity(model){ //to update a city
    const {cities} = model
    const message =  "Which city do you want update?"
    const choices = cities
    return inquirer.prompt({
        name: 'city',
        type: 'list',
        message: message,
        choices: choices
    })
}
//to ask about the tip percentage
function AddCity(model){
    const {cities} = model
    const message = 'Enter a new city: '
    return inquirer.prompt(
        {
            name: 'city',
            type: 'input',
            message: message,
            validate: function(value) { 
                if(cities.indexOf(value) ==-1){ 
                    return true 
                } else {
                    return 'Enter anotther city. This city is in the list'
                }
            }    
        }
    )
}

function listForm(){ //main menu
    const message = 'Select action:'
    const choices = ['Add City','Update City','Delete City']
    return inquirer.prompt({
        name: 'action',
        type: 'list',
        message: message,
        choices: choices
    })
}


const AllQuestion = { //export all, to not use if
    'Add City'   : AddCity,
    'Update City': UpdateCity,
    'Delete City': DeleteCity
}

module.exports = {
    allView, 
    AllQuestion,
    listForm
}