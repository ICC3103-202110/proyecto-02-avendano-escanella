const {inputForm,inputAdd, inputDelete} = require('./view')
const {printTable} = require('console-table-printer')
const { updateDel } = require('./update')


async function app(state, updateAdd, view){
   while (true) {
    const {model,currentView} = state
    const{title,table} = currentView

    console.clear()

    const {cities} = model

    console.log(title)
    if (cities == ''){
        console.log('NO CITIES')
    } else {
        printTable(table) 
    }
    

    const {action} = await inputForm()
    if (action === 'Add City') {
        const {newName} = await inputAdd()
        const updateModel = await updateAdd(newName,model)
        state = {
            ...state,
            model: updateModel,
            currentView: view(updateModel)
            }
        } else if (action === 'Delete City' && cities != '') {
            const {delName} = await inputDelete(model)
            const updateModel = await updateDel(delName,model)
            state = {
                ...state,
                model: updateModel,
                currentView: view(updateModel)
            }
        }
        console.clear()
    }

}

module.exports = {
    app
}