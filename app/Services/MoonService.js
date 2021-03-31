import { ProxyState } from "../AppState.js"



class MoonService {
  mineCheese() {
    console.log("mining cheese from service")
    ProxyState.cheese++
    console.log(ProxyState.cheese)
  }

}

export const moonService = new MoonService()