const {initModel} = require('./model')
const {updateAdd} = require('./update')
const {view} = require('./view')
const {app} = require('./app')

const state = {
    model: initModel,
    currentView: view(initModel)

}

app(state, updateAdd, view)