const { printTable } = require('console-table-printer')
const { listForm, AllQuestion, AddCity,DeleteCity,UpdateCity } = require('./view') // exportar preguntas
const {  AllFunction } = require('./update')
const fetch = require("node-fetch");

const key = 'cb768f5f884d90e3545b9e5fb7980431'

async function app(state, update, view) {
    
    while (true) {

        const { model, currentView } = state
        const { title, table } = currentView

        //console.clear()
        console.log(title)
        printTable(table)

        const { action } = await listForm() 
        const { city } = await AllQuestion[action](model)

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        const data = await response.json()
        const updatedModel = await AllFunction[action](model, city, data)
        
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
        
       
    }
}

module.exports = {app}



/*

 //Agreegar condicion inicio (cuando no hay ninguna ciudad)
        if (action === "Add City") {
            const { city } = await () // poner pregunta

        }

        else if (action === "Update City") {
            const { city } = await () // poner pregunta
        }

        else if (action === "Delete city") {
            const { city } = await () // poner pregunta
        }




*/