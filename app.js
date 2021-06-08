const {inputForm,inputAdd} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state, update, view){
   
    const {model,currentView} = state
    const{title,table} = currentView

    console.clear()
    console.log(title)
    printTable(table)

    const {action} = await inputForm(model)
    if (action === 'Add City') {
        const {name} = await inputAdd(model)
    }
    
}

module.exports = {
    app
}