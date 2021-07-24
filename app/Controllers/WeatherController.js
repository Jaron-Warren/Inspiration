import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js"

//Private
let degreefahrenheit = true

function _drawWeather() {
  document.getElementById("weather").innerHTML = `
  <div>${ProxyState.weather.weather[0].main}</div>
  <div>${ProxyState.weather.name}</div>
  <div onclick="app.weatherController.convertDegrees()" id="degrees">${((ProxyState.weather.main.temp - 273.15) * 1.8 + 32).toFixed(1)} &deg;F</div>
  `
}

//Public
export default class WeatherController {
  constructor() {
    this.getWeather()

    ProxyState.on("weather", _drawWeather);

  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error('problem getting Weather ' + error)
    }
  }

  convertDegrees() {
    if (degreefahrenheit) {
      degreefahrenheit = false
      document.getElementById("degrees").innerText = `${(ProxyState.weather.main.temp - 273.15).toFixed(1)} °C`
    } else {
      degreefahrenheit = true
      document.getElementById("degrees").innerText = `${((ProxyState.weather.main.temp - 273.15) * 1.8 + 32).toFixed(1)} °F`
    }
  }
}
