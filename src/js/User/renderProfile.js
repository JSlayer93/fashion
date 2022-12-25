import { loadFuncOff, loadFuncOn } from "../models/loading"
import { elements } from "../views/elements"
import { log_out_func } from "./login"




export const localstorigevar = localStorage.getItem(`user${localStorage.getItem('userNum')}`)
export const renderProf = (index) =>{
    if(localStorage.getItem('Registered')){
        elements.tell_name.innerHTML = `Your name:${JSON.parse(index).name}`
    }
}

export const showMenuRes = () => {
    elements.profile.style.width = '95%'
    elements.profile.style.height = '90vh'
    elements.profile.style.borderRadius = '10vh'
    elements.profile.style.transition = '1s'
    elements.profile.style.right = '1vh'
    elements.profile_pic.style.opacity = 0
    elements.profile_pic.style.transition = '0.4s'
    elements.profile_menu.classList.remove('no_visible')      
    setTimeout(() => {
        elements.profile_menu.style.opacity = 1
        elements.profile_menu.style.transition =  '0.5s'
    }, 300)
}
export const showMenu = () =>{
    elements.profile.style.width = '95%'
    elements.profile.style.height = '90vh'
    elements.profile.style.borderRadius = '10vh'
    elements.profile.style.transition = '1s'
    elements.profile_pic.style.opacity = 0
    elements.profile_pic.style.transition = '0.4s'
    elements.profile_menu.classList.remove('no_visible')      
    setTimeout(() => {
        elements.profile_menu.style.opacity = 1
        elements.profile_menu.style.transition =  '0.5s'
    }, 300)
}
export const closeMenu = () => {
    elements.indexe_img.classList.remove("no_visible")
    elements.profile.style.width = '9.5vh'
    elements.profile.style.height = '9.4vh'
    elements.profile.style.top = '5vh'
    elements.profile.style.right = '5vh'
    elements.profile.style.borderRadius = '50vh'
    elements.profile.style.transition = '1s'
    elements.profile_menu.style.opacity = 0
    elements.profile_menu.style.transition =  '0.5s'
    setTimeout(() => {
        elements.profile_menu.classList.add('no_visible')
    }, 300)
    setTimeout(() => {
        elements.profile_pic.style.opacity = 1
        elements.profile_pic.style.transition = '0.4s'
        elements.indexe_img.classList.add("no_visible")
    }, 1000)
}
export const transferToLoad = () => {
    elements.profile.style.width = '10vh'
    elements.profile.style.height = '10vh'
    elements.profile.style.top = '40vh'
    elements.profile.style.right = '50%'
    elements.profile.style.borderRadius = '50vh';
    elements.profile.style.transition = '1s'
    elements.profile_menu.style.opacity = 0
    elements.profile_menu.style.transition =  '0.5s'
    elements.profile.style.position = 'fixed'
    elements.profile_menu.classList.add('no_visible')
    setTimeout(() => {
        elements.profile_menu.classList.add('no_visible') 
    }, 300)
    setTimeout(() => {
        elements.profile.style.opacity = 0
        elements.profile.style.transition = '1s'
        loadFuncOn()
    }, 1000)
    setTimeout(() => {
        log_out_func();
    }, 1500)
    setTimeout(() => {
        closeMenu()
        loadFuncOff()
        elements.cart_img.classList.add("no_visible")
    }, 2000)
}