const { printTable } = require('console-table-printer')
const { listForm, AllQuestion } = require('./view') // exportar preguntas
const { AllFuction }= require('/update')


async function app(state, update, view) {
    
    while (true) {

        const { model, currentView } = state
        const { title, table } = currentView

        console.clear()
        console.log(title)
        printTable(table)

        const { action } = await listForm() // poner pregunta
        const { city } = await AllQuestion[action](model)
        model= Allfuction[action](model,city) 
        
       




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