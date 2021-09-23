cityLabel = document.querySelector('#city');
tempLabel = document.querySelector('#temperature');
citiesDropDown = document.querySelector('#cities');


const apiKey = '3307c3f3755ff7d754eefeac1db755ac';

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

let data = [];

const cities = [
    {name: 'Stockholm',
    coordinates: [59.334591, 18.063240]},
    {name: 'Gothenburg',
        coordinates: [57.708870, 11.974560]},
    {name: 'Malmö',
        coordinates: [55.607075, 13.002716]},
    {name: 'Uppsala',
        coordinates: [59.853642, 17.634966]},
    {name: 'Linköping',
        coordinates: [58.411003, 15.616561]},
    {name: 'Örebro',
        coordinates: [59.276651, 15.218932]},
    {name: 'Västerås',
        coordinates: [59.61380803500691, 16.542343005839633]},
    {name: 'Helsingborg',
        coordinates: [56.04954223552882, 12.695907888158123]},
    {name: 'Norrköping',
        coordinates: [58.588455, 16.188313]},
    {name: 'Malmö',
        coordinates: [55.607075, 13.002716]}
]


// create drop down options
for (let i = 0; i < cities.length; i++){

    const city = document.createElement('option');
    city.value = i
    city.textContent = cities[i].name
    citiesDropDown.appendChild(city);
}


function showData(city) {
    cityLabel.textContent = city.name
    tempLabel.textContent = data.current.temp + " C"
    console.log(data)
}


function fetchData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.coordinates[0]}&lon=${city.coordinates[1]}&units=metric&appid=${apiKey}`)
        .then((response) => response.json())
        .then((jsonData) => {
            data = jsonData;
            showData(city)
        });
}



const handleInput = () => {
    const city = cities[citiesDropDown.value]
    fetchData(city)
}

citiesDropDown.addEventListener('input', handleInput)


//load first city on list
fetchData(cities[0])