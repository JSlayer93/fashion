import { elements } from "../views/elements";

export const loadFuncOn = () => {
    elements.indexe_img.classList.remove("no_visible")
    elements.loadgif.classList.remove('no_visible')
}
export const loadFuncOff = () =>{
    elements.loadgif.classList.add('no_visible')
    elements.indexe_img.classList.add("no_visible")
}