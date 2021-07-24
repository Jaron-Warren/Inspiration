import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js"

//Private
function _drawWeather() {
  let fahrenheitnum = (ProxyState.weather.main.temp - 273.15) * 1.8 + 32
  let fahrenheit = fahrenheitnum.toFixed(1)
  document.getElementById("weather").innerHTML = `
  <div>${ProxyState.weather.weather[0].main}</div>
  <div>${ProxyState.weather.name}</div>
  <div>${fahrenheit}</div>
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

}
