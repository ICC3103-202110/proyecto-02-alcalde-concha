const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
 
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

function getTable(model){
    let output = []
    addTable(output,model,0)
    return output
}
function addTable(output, model, value) {
    const { cities, temperatures, tMax, tMin } = model

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

function allView(model){
    return{
    title: getTitle(),
    table: getTable(model)
}}

function DeleteCity(model){ //delete city
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

function UpdateCity(model){ //update city
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

function AddCity(model){ // add city
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

function listForm(model){ //main menu 
    const message = 'Select action:'
    if (model.cities.length == 0)
        choices = ['Add City']
    else
        choices = ['Add City', 'Update City', 'Delete City']
    return inquirer.prompt({
        name: 'action',
        type: 'list',
        message: message,
        choices: choices
    })
}


const AllQuestion = {
    'Add City'   : AddCity,
    'Update City': UpdateCity,
    'Delete City': DeleteCity
}

module.exports = {
    allView, 
    AllQuestion,
    listForm
}