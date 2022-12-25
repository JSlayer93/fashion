import { addEI } from "../models/search"
import { elements } from "../views/elements"
import { closepage } from "./openpage"

var v = 10

export const openclosecartpage = () => {
    v = (v == 10 ? -5 : 10)


    if(localStorage.getItem("BuyImgSrc")){
        elements.lastsec.classList.add("no_visible")
        elements.cart_section.classList.toggle("no_visible")
        elements.succ_buy.classList.add("no_visible")
        elements.searchres.classList.toggle("no_visible")
        elements.buy_section.classList.add("no_visible")
        elements.main_menu_btn.classList.add("no_visible")
    }else{
        if(v == -5){
            addEI()
        }
        elements.main_menu_btn.classList.add("no_visible")
        elements.manandWoman.classList.toggle("no_visible")
        elements.lastsec.classList.toggle("no_visible")
        elements.cart_section.classList.toggle("no_visible")
        elements.succ_buy.classList.add("no_visible")
        elements.searchres.classList.toggle("no_visible")
        elements.buy_section.classList.add("no_visible")
        elements.manandWoman.style.opacity = 1
        elements.lastsec.style.opacity = 1
    }
    


    elements.searchInput.style.transition = "0.5s"
    elements.searchInput.style.top = `${v}vh`
    elements.searchInput.style.opacity = `${v}`

    localStorage.removeItem("BuyImgSrc")
    // elements.manandWoman.classList.toggle("no_visible")
    // elements.lastsec.classList.toggle("no_visible")
    // elements.cart_section.classList.toggle("no_visible")
    // elements.succ_buy.classList.add("no_visible")
    // elements.searchres.classList.toggle("no_visible")
    // elements.buy_section.classList.add("no_visible")
}


export const deleteLast = () =>{
    elements.LastPrice.innerText = `0.00$`
    var child = elements.cart_sec_items.lastElementChild; 
    while (child) {
        elements.cart_sec_items.removeChild(child);
        child = elements.cart_sec_items.lastElementChild;
    }
}

export const renderCartPage = (arr) => {
    var lastPriceWay = 0
    for(var i = 0; i < 19; i++){
        if(localStorage.getItem(`BuyObject${i}${elements.tell_name.innerHTML}`)){
            const testArr = localStorage.getItem(`BuyObject${i}${elements.tell_name.innerHTML}`)
            const itemCartPage = `
            <div id="cart_sec_item" class="cart_sec_item">
                <img src="${JSON.parse(testArr).buyImgSrc}" alt="">
                <p>${JSON.parse(testArr).orderName}</p>
                <h1>${JSON.parse(testArr).BuyNum}</h1>
            <div>`
            elements.cart_sec_items.insertAdjacentHTML('afterbegin', itemCartPage)
            lastPriceWay = Number(JSON.parse(testArr).price) * Number(JSON.parse(testArr).BuyNum) + lastPriceWay
            console.log(lastPriceWay)
            elements.LastPrice.innerText = String(Math.round(lastPriceWay) - 0.01) + "$"
        }
    }
}