import { ProxyState } from "../AppState.js"

function _draw(){
  let template = ""
  ProxyState.items.forEach(i => {
    template += /*html*/ `<button class="btn btn-success mr-3" onclick="app.itemController.buyItem('${i.name}')">${i.name}- ${i.price} </button>`
  })
  document.getElementById('items').innerHTML = template
}



export default class ItemController {
 constructor(){
    _draw()
    // ProxyState.on("item", _draw)
    // console.log("itemController")
  }

  buyItem(itemName){
    console.log(itemName)
  }
}