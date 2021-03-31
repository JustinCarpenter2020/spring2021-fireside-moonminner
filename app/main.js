// import ValuesController from "./Controllers/ValuesController.js";
import MoonController from "./Controllers/MoonController.js";
import ItemController from "./Controllers/ItemController.js";


class App {
  // valuesController = new ValuesController();
  moonController = new MoonController;

  itemController = new ItemController
}

window["app"] = new App();
