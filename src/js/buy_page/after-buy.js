import { loadFuncOff } from "../models/loading"
import { localstorigevar } from "../User/renderProfile"
import { elements } from "../views/elements"
import { deleteLast } from "./open-cart-page"
import { closepage } from "./openpage"



export const not_reg_buy = () => {
    elements.buy_section.classList.add('no_visible')
    elements.afterbuy.classList.remove('no_visible')
    elements.buy_not_reg.classList.remove('no_visible')
    localStorage.removeItem("BuyImgSrc")
}

export const backAfterBuyFunc = () => {
    elements.afterbuy.classList.add('no_visible')
    closepage();
    localStorage.removeItem("BuyImgSrc")
}

let BuyNum = 1;
let buyName = 0
var buyId = 0
var ItemPrice = 0
BuyNum = localStorage.getItem('BuyNum')

export const buy_succed = (arr) => {
    for(var i = 0; i < 20; i++){
        if(arr[i].image == localStorage.getItem("BuyImgSrc")){
            buyId = arr[i].id
            buyName = arr[i].title
            ItemPrice = Number(arr[i].price)
        }
    }
    if(localStorage.getItem(`BuyObject${buyId}${elements.tell_name.innerHTML}`)){
        const buyObjectest = localStorage.getItem(`BuyObject${buyId}${elements.tell_name.innerHTML}`)
        BuyNum = JSON.parse(buyObjectest).BuyNum
    }else{
        BuyNum = 0
    }
    console.log(buyId)
    BuyNum = Number(BuyNum)
    BuyNum = BuyNum + 1
    localStorage.setItem(`BuyObject${buyId}${elements.tell_name.innerHTML}`,
        JSON.stringify({
            "BuyNum": BuyNum,
            "orderName": buyName,
            "buyImgSrc": localStorage.getItem("BuyImgSrc"),
            "price": Number(ItemPrice)
        })
    )
}

export const lastBuyFunc = () => {
    for(var i = 0; i < 19; i++){
        if(localStorage.getItem(`BuyObject${i}${elements.tell_name.innerHTML}`)){
            localStorage.removeItem(`BuyObject${i}${elements.tell_name.innerHTML}`)
            elements.succ_buy.classList.remove("no_visible")
        }
    }
    deleteLast()
}

export const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var t = 0; t < reveals.length; t++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[t].getBoundingClientRect().top;
        var elementVisible = 200;
        if (elementTop < windowHeight - elementVisible) {
            elements.cart_sec_buy.classList.add("flexpo")
        } else {
            elements.cart_sec_buy.classList.remove("flexpo")
        }
    }
}