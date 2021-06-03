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


function getTable(model){
    let output = []
    console.log(output)
    addTable(output,model,0)
    console.log(output)
    return output
}
function addTable(output, model, value) {
    const { cities, temperatures, tMax, tMin } = initModel
    if (value == 0) {
        output.push({
            'city': `${cities[value]}`, 'temp': `${temperatures[value]}`, 'Max': `${tMax[value]}`, 'Min': `${tMin[value]}`
        })
    }
    else {
        if (value >= cities.length) { return output }
        output.push({
            'city': `${cities[value]}`, 'temp': `${temperatures[value]}`, 'Max': `${tMax[value]}`, 'Min': `${tMin[value]}`
    
        })
        addTable(model,value+1)
    }
}
/*
//to show the rectangle(table)
function getTable(model){ // hay q arraglar esto para que se vea todo el tablero
    const {cities,temperatures} = model
    let count = 0
    let table = Array
    //while(count<cities.length){
        //table[count]=[{'city': cities[count] , 'temperature': temperatures[count]]} // en el //paradigma no se puede while
        //count+=1;
    //}
    return [{
            "City": `${model.cities}`,
            "Temp": `${model.temperatures}`,
            "Max": ` ${model.tMax}`,
            "Min": `${model.tMin}`
        }];
}
*/
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
function DeleteCity(model){ //para eliminar una ciudad
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

function UpdateCity(model){ //para actualizar una ciudad
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

function listForm(){ //menu principal
    const message = 'Select action:'
    const choices = ['Add City','Update City','Delete City']
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