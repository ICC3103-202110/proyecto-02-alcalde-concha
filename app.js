const { printTable } = require('console-table-printer')
const { listForm, AllQuestion} = require('./view') 
const {  AllFunction } = require('./update')
const fetch = require("node-fetch");

const key = 'cb768f5f884d90e3545b9e5fb7980431' //key for api

async function app(state, view) {
    
    while (true) {
        
        const { model, currentView } = state
        const { title, table } = currentView

        console.clear()
        console.log(title)

        if(model.cities.length != 0) printTable(table)
        
        const { action } = await listForm(model) //main menu
        const { city } = await AllQuestion[action](model)//options menu

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        const data = await response.json()
        const updatedModel = await AllFunction[action](model, city, data) //all actions
        
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
        
       
    }
}

module.exports = {app}

