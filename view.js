const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

const nameOfCity = city1 => city1.name

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

function getTable(model){
    const {cities} = model
    return cities
}


function inputForm(model){
    const {cities} = model 
    const choices = ['Add City', 'Update City', 'Delete City'] 
    const message1 = 'Select action:'
    if (cities == ''){
        choices.pop()
        choices.pop()
    }
    return inquirer.prompt([{
        name: 'action',
        type: 'list',
        message: message1,
        default: 'Use arrow keys',
        choices: choices
    }])
    
}

function inputAdd(){
    const message2 = 'Location?'
    return inquirer.prompt([{
        name: 'newName',
        type: 'input',
        message: message2
    }])

}

function inputChange(model) {
    const {cities} = model
    const message2 = 'Location?'
    return inquirer.prompt([{
        name: 'changeName',
        type: 'list',
        message: message2,
        choices: cities.map(nameOfCity)
    }])

}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports ={
    view,
    inputForm,
    inputAdd,
    inputChange
}