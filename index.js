const {initModel} = require('./model')
const { app } = require('./app')
const {allView} = require('./view')

const state = {
    model: initModel,
    currentView: allView(initModel)
}

app(state, allView)
