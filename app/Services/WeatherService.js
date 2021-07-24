import { ProxyState } from "../AppState.js";
import { sandBox } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    let res = await sandBox.get('weather')
    // console.log(res.data)
    ProxyState.weather = res.data
  }

}

export const weatherService = new WeatherService();

