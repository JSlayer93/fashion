import { backAfterBuyFunc, buy_succed, lastBuyFunc, not_reg_buy, reveal } from "./buy_page/after-buy";
import { deleteLast, opencartpage, openclosecartpage, renderCartPage } from "./buy_page/open-cart-page";
import { closepage, makeDes, openpage } from "./buy_page/openpage";
import { loadFuncOff, loadFuncOn } from "./models/loading"
import { addEI, clearSearch, removeEI, renderSItems } from "./models/search";
import { login2, log_close, log_in_func, log_out_func, pressLogInReg } from "./User/login";
import { AfterReg, alreadyReg, back_click, reg_click, sendMail, vaildEmail } from "./User/registration"
import { closeMenu, localstorigevar, renderProf, showMenu, showMenuRes, transferToLoad } from "./User/renderProfile";
import { elements } from "./views/elements"
import { renderManAndWoman, renderStartFunc } from "./views/renderStart";

loadFuncOn()
fetch('https://shop-api.herokuapp.com/items')
.then(res=>res.json())
.then(json=>renderManAndWoman(json.msg))



if(location.reload){
    localStorage.removeItem("BuyImgSrc")
}

if (localStorage.getItem('Registered')) {
    renderProf(localstorigevar)
    elements.cart_img.classList.remove("no_visible")
}


if(localStorage.getItem('login_ed')){
    elements.cart_img.classList.remove("no_visible")
    renderProf(localstorigevar)
    const log_user_num = localStorage.getItem(`user${localStorage.getItem('whichUser')}`)
    elements.tell_name.innerHTML = `${JSON.parse(log_user_num).name}`
}


if(localStorage.getItem('login_ed')){
    alreadyReg();
}


if(localStorage.getItem('Registered')){
    alreadyReg();
}

window.addEventListener('keypress', function(){
    if(this.event.key == 'Enter'){
        fetch('https://shop-api.herokuapp.com/items')
        .then(res=>res.json())
        .then(json=>renderSItems(elements.searchInput, json.msg))
        clearSearch()
    }
})
elements.main_menu_btn.addEventListener('click', addEI)



elements.reg_btn.addEventListener('click', function(){
    loadFuncOn();
    reg_click()
    setTimeout(() => {loadFuncOff()}, 1000)
})
elements.close_btn.addEventListener("click", function(){
    loadFuncOn();
    back_click()
    setTimeout(() => {loadFuncOff()}, 1000)
})


elements.Reg_F.addEventListener('click', function(){
    if(vaildEmail() == true || vaildEmail() == undefined){
        AfterReg()
    }else{
        console.log(vaildEmail())
    }
})

//Log_in

elements.log_in_reg.addEventListener('click', pressLogInReg)
elements.log_in_close.addEventListener('click', function(){
    back_click();
    log_close();
})

//profile menu
elements.profile.addEventListener('click', function(){
    if(document.documentElement.clientWidth <= 600){
        showMenuRes()
    }else{
        showMenu()
    }
})
elements.profile_menu_close.addEventListener('click', closeMenu)
elements.log_out_btn.addEventListener('click', function(){
    transferToLoad()
})

//log in
elements.log_in_full.addEventListener('click', function(){
    log_in_func()
    login2()
})



addEventListener('click', e => {
    e.path[2].id
    if(e.srcElement.localName == 'img' && (e.path[2].id == 'man_and_woman' || e.path[2].id == 'searchRes')){
        clearSearch()
        elements.searchResD.classList.add('no_visible')
        openpage(e);
        e.path[0].currentSrc
        fetch('https://shop-api.herokuapp.com/items')
        .then(res=>res.json())
        .then(json=>makeDes(json.msg, e.path[0].currentSrc))
    }
})
elements.buy_back_button.addEventListener('click', e=> {
    closepage();
})

elements.btn_addincart.addEventListener('click', function(){
    if(!localStorage.getItem('Registered') && !localStorage.getItem('login_ed')){
        not_reg_buy()
    }
})
elements.btn_buy.addEventListener('click', function(){
    if(!localStorage.getItem('Registered') && !localStorage.getItem('login_ed')){
        not_reg_buy()
    }
})

elements.btn_addincart.addEventListener('click', function(){
    if(localStorage.getItem('Registered') || localStorage.getItem('login_ed')){
        fetch('https://shop-api.herokuapp.com/items')
        .then(res=>res.json())
        .then(json=>buy_succed(json.msg))
    }
})
elements.btn_buy.addEventListener('click', function(){
    if(localStorage.getItem('Registered') || localStorage.getItem('login_ed')){

    }
})

elements.backAfterBuy.addEventListener('click', function(){
    backAfterBuyFunc()
})

addEventListener('click', e => {
    if(e.srcElement.localName == 'img' && (e.path[2].id == 'man_and_woman' || e.path[2].id == 'searchRes')){
        console.log(e.target.currentSrc)
        localStorage.setItem("BuyImgSrc", e.target.currentSrc)
    }
})

//cart page open
elements.cart_img.addEventListener("click", function(){
    deleteLast() 
    renderCartPage();
    openclosecartpage();
})

elements.last_buy_btn.addEventListener("click", function(){
    lastBuyFunc()
})