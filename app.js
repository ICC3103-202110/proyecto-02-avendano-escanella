const {inputForm,inputAdd, inputChange} = require('./view')
const {printTable} = require('console-table-printer')
const {updateDel, updateUpd} = require('./update')


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
    

    const {action} = await inputForm(model)
    if (action === 'Add City') {
        const {newName} = await inputAdd()
        const updateModel = await updateAdd(newName,model)
        state = {
            ...state,
            model: updateModel,
            currentView: view(updateModel)
            }

        } else if (action === 'Update City' && cities != '') {
            const {changeName} = await inputChange(model)
            const updateModel = await updateUpd(changeName,model)
            state = {
                ...state,
                model: updateModel,
                currentView: view(updateModel)
            }
        } else if(action === 'Update City' && cities == '') {
                console.log('You can not update a city because there arent any')
        
        
        } else if (action === 'Delete City' && cities != '') {
            const {changeName} = await inputChange(model)
            const updateModel = await updateDel(changeName,model)
            state = {
                ...state,
                model: updateModel,
                currentView: view(updateModel)
            }
        } else if(action === 'Delete City' && cities == '') {
                console.log('You can not delete a city because there arent any')
        }
    }

}

module.exports = {
    app
}