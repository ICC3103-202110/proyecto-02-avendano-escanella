const axios = require('axios')

function updateAdd(newName, model) {
    
    /*const x = name.length*/
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${newName}&appid=f0ae2053adce751d2b36e1be3b9005b8`
        ).then((response)=> {
            newTemp = response.data.temp
            newMax = response.data.main.temp_max
            newMin = response.data.main.temp_min
            console.log(newTemp)
        });
    console.log(newTemp)
    const {action} = model
    const {name} = model
    const {temp} = model
    const {max} = model
    const {min} = model

    const i = temp.length
    name[i] = newName
    temp[i] = newTemp
    max[i] = newMax
    min[i] = newMin

    return {
        ...model,
        action: action,
        name: name,
        temp: temp,
        max: max,
        min: min
    }
}

module.exports = {
    updateAdd
}