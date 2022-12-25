import { loadFuncOff, loadFuncOn } from "../models/loading"
import { elements } from "../views/elements"


export const openpage = (e) => {
    elements.manandWoman.style.opacity = 0
    elements.manandWoman.style.transition = '1s'
    elements.lastsec.style.opacity = 0
    elements.lastsec.style.transition = '1s'
    elements.buy_img.src = e.path[0].currentSrc
    loadFuncOn()
    setTimeout(() => {
        elements.manandWoman.classList.add("no_visible")
        elements.lastsec.classList.add("no_visible")
    }, 1000)
    setTimeout(() => {
        elements.buy_section.classList.remove('no_visible')
        loadFuncOff()
    }, 1500)
}

export const closepage = () =>{
    localStorage.removeItem("BuyImgSrc")
    elements.buy_section.classList.add('no_visible')
    loadFuncOn()
    setTimeout(() => {
        elements.manandWoman.classList.remove("no_visible")
        elements.lastsec.classList.remove("no_visible")
    }, 1000)
    setTimeout(() => {
        elements.manandWoman.style.opacity = 1
        elements.manandWoman.style.transition = '1s'
        elements.lastsec.style.opacity = 1
        elements.lastsec.style.transition = '1s'
        loadFuncOff()
    }, 1500)
}

export const makeDes = (obj, e) => {
    for(var i = 0; i <= 19; i++){
        if(e == obj[i].image){
            elements.description.innerHTML = obj[i].description
        }
    }
}