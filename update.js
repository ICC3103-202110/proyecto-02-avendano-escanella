const axios = require('axios')

const nameOfCity = city1 => city1.name

async function updateAdd(newName, model) {

    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${newName}&appid=f0ae2053adce751d2b36e1be3b9005b8&units=metric`
        ).then((response)=> {
            newTemp = response.data.main.temp
            newMax = response.data.main.temp_max
            newMin = response.data.main.temp_min
        });
    
    city = {name: `${newName}`,temp:`${newTemp}`,max:`${newMax}`,min:`${newMin}`}
    const {cities} = model
    
    cities[cities.length] = city

    return {
        ...model,
        cities: cities
    }
}

function updateDel(delName, model) {
    const {cities} = model
    const cit = (cities.map(nameOfCity))
    const pos = cit.indexOf(delName) 
    cities.splice(pos,1)
    return {
        ...model,
        cities: cities
    }
}

module.exports = {
    updateAdd,
    updateDel
}