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
        table[count]={city: cities[count] , temperature: temperatures[count]}
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
    let table = Array
    const {cities} = model
    while(count<cities.length){
        table[count]=cities[count]
        count+=1;
    }
    const choices = table
    return inquirer.prompt({
        name: city,
        type: 'list',
        message: "which city do you want to delete?",
        choices: choices
    })
}

//to ask about the tip percentage
function inputForm_2(model){
    const {tax} = model
    const message = 'enter %tips'
    return inquirer.prompt([
        {
            name: 'tax',
            type: 'tax',
            message: message,
            default: tax,
            validate: function(value){
                if(value >=0){
                    return true
                } else {
                    return 'Enter another %tips'
                }
            }
        }
    ])
}


module.exports = {
    allView, 
    inputForm_1,
    inputForm_2
}