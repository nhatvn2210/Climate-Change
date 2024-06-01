// DOM
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const place = document.querySelector('.place');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const wind = document.querySelector('.wind-speed');
const weatherIcon = document.querySelector('.weather-icon');
const apiKey = "4269652c5e1b6a66a34f9d3d16ecc098";
// Function
// Render history list
// Handle search function
function handleSearch() {
    // Get data from search input
    let searchString = searchInput.value;

    console.log(searchString);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchString}&appid=${apiKey}&lang=vi&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            place.textContent = data.name;
            description.textContent = data.weather[0].description;
            temperature.textContent = data.main.temp + " độ C";
            weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            wind.textContent = "Tốc độ gió: " + data.wind.speed + "km/h";
        })
        .catch(error => console.error("Lỗi fetch data:", error));

}