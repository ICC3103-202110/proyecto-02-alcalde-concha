const { printTable } = require('console-table-printer')
const {} = require('./view') // exportar preguntas



async function app(state, update, view) {
    
    while (true) {

        const { model, currentView } = state
        const { title, table } = currentView

        console.clear()
        console.log(title)
        printTable(table)

        const { action } = await () // poner pregunta
        
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





    }
}

module.exports = {app}