// import Value from "./Models/Value.js"
import Item from "./Models/item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // /** @type {Value[]} */
  // values = []
 cheese = 0


 items = [new Item("crazys item", 23, 1 ), new Item("item", 2, 3000)]
}

















export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
