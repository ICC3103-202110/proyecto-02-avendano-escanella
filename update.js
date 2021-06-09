const axios = require('axios')

async function updateAdd(newName, model) {

    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${newName}&appid=f0ae2053adce751d2b36e1be3b9005b8&units=metric`
        ).then((response)=> {
            newTemp = response.data.main.temp
            newMax = response.data.main.temp_max
            newMin = response.data.main.temp_min
            console.log(newTemp)
        });
    
    city = {name: `${newName}`,temp:`${newTemp}`,max:`${newMax}`,min:`${newMin}`}
    const {cities} = model
    
    cities[cities.length] = city
    console.log(cities)

    return {
        ...model,
        cities: cities
    }
}

module.exports = {
    updateAdd
}