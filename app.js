const API_KEY = "8b86f6ddeae6f44e5bccd4363c6cf7ea"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q="
const END_URL = "&appid=8b86f6ddeae6f44e5bccd4363c6cf7ea&units=metric"

const cityName = document.querySelector("form input")
const serIcon = document.querySelector(".ser-icon")
const showTemp = document.querySelector('#show-temp')
const showCity = document.querySelector("#show-city")
const humValue = document.querySelector('#humi-value')
const windValue = document.querySelector('#wind-value')
const showMessage = document.querySelector(".show-message")


serIcon.addEventListener('click', (evt) => {
    if (cityName.value === "") {
        console.log("error ,essahe")
        showMessage.style.visibility = "visible"
    }else{
        getWeather(evt)
        showMessage.style.visibility = "hidden"
    }
})


const getWeather = async (evt) => {
    let city = cityName.value
    let URL = `${BASE_URL}${city}${END_URL}`
    let responce = await fetch(URL)
    let data = await responce.json()
    console.log(data)
    showTemp.innerText = data.main.temp + "°C"
    showCity.innerText = data.name
    humValue.innerText = data.main.humidity + "%"
    windValue.innerText = data.wind.speed + "km/h"
    let weatStatus = data.weather[0].main
    console.log(weatStatus)
    changeImage(weatStatus)
}


const changeImage = (weatStatus) => {
    let img = document.querySelector('.show-weather img')
    if (weatStatus == "Smoke") {
        img.src = "images/snow.png"
    } else if (weatStatus == "Clear") {
        img.src = "images/clear.png"
    } else if (weatStatus == "Clouds") {
        img.src = "images/clouds.png"
    } else if (weatStatus == "Drizzle") {
        img.src = "images/drizzle.png"
    } else if (weatStatus == "Mist") {
        img.src = "images/mist.png"
    } else if (weatStatus == "Rain") {
        img.src = "images/rain.png"
    } else if (weatStatus == "Fog") {
        img.src = "images/clouds.png"
    }
}


if (cityName.value === "mumbai") {
    getWeather()
}
