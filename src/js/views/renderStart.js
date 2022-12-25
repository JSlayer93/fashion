import { loadFuncOff, loadFuncOn } from "../models/loading"
import { elements } from "./elements"



export const renderManAndWoman = (obj) => {

    var simulations = [
        elements.mansTop.firstElementChild,
        elements.mansTop.firstElementChild.nextElementSibling,
        elements.mansTop.firstElementChild.nextElementSibling.nextElementSibling,
        elements.mansTop.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling
    ]
    var simulations2 = [
        elements.womansTop.firstElementChild,
        elements.womansTop.firstElementChild.nextElementSibling,
        elements.womansTop.firstElementChild.nextElementSibling.nextElementSibling,
        elements.womansTop.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling
    ]
    
    var womanCount = -1
    var manCount = -1
    console.log(obj)
    for(var i = 0; i <= 19; i = i + 1){
        if(obj[i].category == "men's clothing"){
            manCount++
            simulations[manCount].src = obj[i].image
        }
        if(obj[i].category == "women's clothing"){
            womanCount = womanCount + 1
            if(womanCount < 4){
                simulations2[womanCount].src = obj[i].image
            }
        }
    }

    loadFuncOff()
}