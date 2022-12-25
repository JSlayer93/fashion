import { closepage } from "../buy_page/openpage";
import { elements } from "../views/elements";


export const removeEI = () => {
    elements.manandWoman.classList.add("no_visible")
    elements.lastsec.classList.add("no_visible")
    elements.searchResD.classList.remove('no_visible')
    elements.main_menu_btn.classList.remove('no_visible')
    elements.searchres.classList.remove('no_visible')
    elements.buy_section.classList.add('no_visible')
}
export const addEI = () =>{
    elements.manandWoman.classList.remove("no_visible")
    elements.lastsec.classList.remove("no_visible")
    elements.searchResD.classList.add('no_visible')
    elements.main_menu_btn.classList.add('no_visible')
    elements.buy_section.classList.add('no_visible')
    elements.manandWoman.style.opacity = 1
    elements.lastsec.style.opacity = 1
    clearSearch()
}

export const renderSItems = (searchTXT, obj) => {
    elements.searchRESTxt.innerHTML = `Result for: ${elements.searchInput.value}`
    for(var i = 0; i <= 19; i = i + 1){
        if(searchTXT.value.length == 0){
            elements.searchRESTxt.innerHTML = `Search something`
            console.log('sus')
        }else if(obj[i].title.includes(searchTXT.value)){
            const item = `<img id="SearchRIMG" src="${obj[i].image}" alt="" class="searchResIMG">`
            elements.searchResIMGS.insertAdjacentHTML('afterbegin', item)
            removeEI()
        }
    }
    searchTXT.value = ''
}

export const clearSearch = () => {
    while (elements.searchResIMGS.firstChild) {
        elements.searchResIMGS.removeChild(elements.searchResIMGS.firstChild);
    }
}