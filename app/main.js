import ImageController from "./Controllers/ImageController.js";
import ListController from "./Controllers/ListController.js"

class App {
  listController = new ListController()
  imageController = new ImageController()
}

window["app"] = new App();
