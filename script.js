//Variaveis 
const apiKey = "d3a786cc430697df1e513525634e8900"
const apiCountryFlag = `https://www.countryflagicons.com/SHINY/64/` 

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")

//Funçoes

const showWeatherData = (city) => {
    console.log(city)
}

//Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault()

   const city = cityInput.value;
   showWeatherData(city)
})