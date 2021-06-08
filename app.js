const {inputForm,inputAdd} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state, updateAdd, view){
   while (true) {
    const {model,currentView} = state
    const{title,table} = currentView

    console.clear()
    console.log(title)
    printTable(table)

    const {action} = await inputForm(model)
    if (action === 'Add City') {
        const {newName} = await inputAdd(model)
        const updateModel = updateAdd(newName,model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updateModel)
        }
        }   
    }
}

module.exports = {
    app
}