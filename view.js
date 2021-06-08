const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.cyanBright.bold(
        figlet.textSync(
            'Weather App',
            {
                horizontalLayout: 'full',
                font: 'straight'
                
            }
        )
    )
}

function getTable(model){
    const {name} = model
    const {temp} = model
    const {max} = model
    const {min} = model
    return [{
        'Name':` ${name}`,
        'Temp': `${tipPercent}`,
        'Max': `${tip}`,
        'Min':`${total}`
        }]
}

function inputForm(model){
    const{name} = model
    const choices = ['Add City','Update City','Delete City']
    const message = 'Select action:'
    return inqui
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports ={
    view,
    inputForm
}