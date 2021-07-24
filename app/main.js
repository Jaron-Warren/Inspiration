import ClockController from "./Controllers/ClockController.js";
import ImageController from "./Controllers/ImageController.js";
import ListController from "./Controllers/ListController.js"
import QuoteController from "./Controllers/QuoteController.js";
import WeatherController from "./Controllers/WeatherController.js";

class App {
  listController = new ListController()
  imageController = new ImageController()
  quoteController = new QuoteController()
  weatherController = new WeatherController()
  clockController = new ClockController()
}

window["app"] = new App();
