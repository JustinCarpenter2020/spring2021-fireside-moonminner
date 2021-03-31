import { ProxyState } from "../AppState.js"
import { moonService } from '../Services/MoonService.js'


function _draw(){
  document.getElementById('cheese').innerHTML = ProxyState.cheese.toString()
}

export default class MoonController {
  constructor(){
    _draw()
    ProxyState.on("cheese", _draw)
  }
mineCheese(){
  console.log("Mining cheese from controller")
  moonService.mineCheese()
}
}