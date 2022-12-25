import { elements } from "../views/elements"
import { loadFuncOff, loadFuncOn } from "../models/loading"
import { alreadyReg, back_click, textRestart } from "./registration"
import { localstorigevar, renderProf } from "./renderProfile"
import { encryption } from "../models/encryption."



export const log_out_func = () =>{
    elements.reg_btn.classList.remove("no_visible")
    elements.profile.classList.add('no_visible')
    log_close();
    localStorage.removeItem('Registered')
    localStorage.removeItem('login_ed')
}
export const pressLogInReg = () => {
    loadFuncOn();
    setTimeout(() => {elements.registration.style.opacity = 0}, 0)
    elements.registration.style.transition = '1s'
    setTimeout(() => {
        elements.registration.classList.add("no_visible")
        textRestart();
        elements.log_in_nav.classList.remove('no_visible')
        loadFuncOff()
    }, 2000)
    setTimeout(() => {
        elements.log_in_nav.style.opacity = 1
        elements.log_in_nav.style.transition = '1s'
    }, 2100)
}
export const log_close = () => {
    loadFuncOn()
    elements.log_in_nav.style.opacity = 0
    elements.log_in_nav.style.transition = '1s'
    setTimeout(() => {
        elements.log_in_nav.classList.add('no_visible')
        loadFuncOff();
    }, 1200)
}

const log_massive = []

export const log_in_func = () =>{
    if(elements.log_email.value != '' && elements.log_password.value != ''){
        for(var i = 1; i <= localStorage.getItem('userNum'); i = i + 1){
            const log_user_num = localStorage.getItem(`user${i}`)
            if(elements.log_email.value == JSON.parse(log_user_num).email && encryption(elements.log_password.value) == JSON.parse(log_user_num).password){
                localStorage.removeItem('whichUser')
                localStorage.setItem('whichUser', i)
                localStorage.setItem('login_ed', true)
                back_click();
                log_close();
                console.log('hi')
                setTimeout(() => {
                    alreadyReg()
                    elements.cart_img.classList.remove("no_visible")
                }, 2000)
                elements.tell_name.innerHTML = `Your name:${JSON.parse(log_user_num).name}`
                log_massive.push(i)
            }
        }
    }
}


export const login2 = () => {
    console.log(log_massive[0])
}