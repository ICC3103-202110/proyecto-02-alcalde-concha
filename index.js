const {initModel} = require('./model')
const { app } = require('./app')
const {update} = require('./update')
const {allView} = require('./view')

const state = {
    model: initModel,
    currentView: allView(initModel)
}

app(state, update, allView)
