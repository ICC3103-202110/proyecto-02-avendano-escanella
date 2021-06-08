const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.cyanBright.bold(
        figlet.textSync(
            'Weather App',
            {
                horizontalLayout: 'full',
                font: 'small'
                
            }
        )
    )
}

function getCitys(model){
    const {name} = model
    const {temp} = model
    const {max} = model
    const {min} = model
    for (i=0; i<name.length; i++){
    }
}
function getTable(model){
    const {name} = model
    const {temp} = model
    const {max} = model
    const {min} = model
    return [{
        'Name':` ${name[0]}`,
        'Temp': `${temp[0]}`,
        'Max': `${max[0]}`,
        'Min':`${min[0]}`
        }]
}

function inputForm(model){
    const{action} = model
    const choices = ['Add City','Update City','Delete City']
    const message1 = 'Select action:'
    const message2 = 'Location?'
    return inquirer.prompt([{
        name: 'action',
        type: 'list',
        message: message1,
        default: 'Use arrow keys',
        choices: choices
    }])
}

function inputAdd(model){
    const{name} = model
    const message2 = 'Location?'
    return inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: message2
    }])

}

//function inputDelete(model)
//function inputUpdate(model)

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports ={
    view,
    inputForm,
    inputAdd
}