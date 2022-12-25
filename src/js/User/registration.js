import { elements } from "../views/elements"
import { loadFuncOff, loadFuncOn } from "../models/loading"
import { encryption } from "../models/encryption.";



export const reg_click = () => {
    textRestart();
    localStorage.removeItem("BuyImgSrc")
    elements.cart_section.classList.add("no_visible")
    elements.manandWoman.classList.add("no_visible")
    elements.head.classList.add("no_visible")
    elements.lastsec.classList.add("no_visible")
    elements.reg_btn.classList.add("no_visible")
    elements.profile.classList.add('no_visible')
    elements.buy_section.classList.add("no_visible")
    elements.searchres.classList.add('no_visible')
    elements.afterbuy.classList.add('no_visible')
    setTimeout(() => {elements.registration.classList.remove("no_visible")}, 1000)
    setTimeout(() => {elements.registration.style.opacity = 1}, 1200)
    elements.registration.style.transition = '1s'
}
export const back_click = () => {
    setTimeout(() => {elements.registration.style.opacity = 0}, 0)
    elements.registration.style.transition = '1s'
    setTimeout(() => {
        elements.manandWoman.classList.remove("no_visible")
        elements.head.classList.remove("no_visible")
        elements.lastsec.classList.remove("no_visible")
        elements.registration.classList.add("no_visible")
        elements.reg_btn.classList.remove("no_visible")
        elements.manandWoman.style.opacity = 1
        elements.manandWoman.style.transition = '1s'
        elements.lastsec.style.opacity = 1
        elements.lastsec.style.transition = '1s'
        textRestart();
    }, 2000)
}
export const vaildEmail = () => {
    for(var i = 1; i <= localStorage.getItem('userNum'); i = i + 1){
        const localstorigevar2 = localStorage.getItem(`user${i}`)
        if(JSON.parse(localstorigevar2).email != elements.Reg_email.value && JSON.parse(localstorigevar2).name != elements.Reg_name.value ){
            return true
        }else{
            return false
        }
    }
}
export const textRestart = () =>{
    elements.Reg_email.value = '';
    elements.Reg_name.value = '';
    elements.Reg_password.value = '';
    elements.Reg_pawwrod_con.value = '';
    elements.log_email.value = '';
    elements.log_password.value = '';
}
export const wrong =(index, index2, index3, index4) => {
    index.style.borderColor = 'red'
    index2.style.borderColor = 'red'
    index3.style.borderColor = 'red'
    index4.style.borderColor = 'red'
}
export const alreadyReg = () =>{
    elements.reg_btn.classList.add("no_visible")
    elements.profile.classList.remove('no_visible')
    elements.cart_img.classList.remove("no_visible")
}
let userNum = 1;
userNum = localStorage.getItem('userNum')
export const sendMail = (MailText, MailSubject) => {
    Email.send({
        SecureToken: 'e6a21137-3ffa-464a-8e20-4bf870dfe44e',
        To : elements.Reg_email.value,
        From : "fashionwebt",
        Subject : MailSubject,
        Body : MailText
    }).then(
      message => alert(message)
    );
}
export const AfterReg = () => {
    if(elements.Reg_name.value != 0 && elements.Reg_email.value != 0 && elements.Reg_password.value != 0 && elements.Reg_pawwrod_con.value != 0
        && elements.Reg_password.value == elements.Reg_pawwrod_con.value && elements.Reg_email.value.includes('@gmail.com')){
        userNum = Number(userNum)
        userNum = userNum + 1
        localStorage.setItem(`user${(userNum)}`,
            JSON.stringify({name: elements.Reg_name.value, email: elements.Reg_email.value, password: encryption(elements.Reg_password.value)})
        )
        localStorage.setItem('userNum', Number(userNum))
        const some = localStorage.getItem(`user${userNum}`)
        console.log('some :', JSON.parse(some).password)
        localStorage.setItem('Registered', true)
        console.log(localStorage.getItem('Registered'))
        elements.tell_name.innerHTML = `Your name: ${elements.Reg_name.value}`
        loadFuncOn();
        back_click();
        setTimeout(() => {loadFuncOff()}, 1000)
        setTimeout(() => {alreadyReg()}, 2000)
    }else{
        wrong(elements.Reg_email, elements.Reg_name, elements.Reg_password, elements.Reg_pawwrod_con);
    }
}



