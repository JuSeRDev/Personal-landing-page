namespace challenge28 {
    
    const hamburguer = document.querySelector(".hamburguer") as HTMLImageElement
    const closeMenu = document.querySelector(".close-menu") as HTMLImageElement
    const ul = document.querySelector(".ul") as HTMLUListElement
    const infoHeader = document.querySelector(".info-header") as HTMLDivElement

    const ulActive = "ul-active"
    const infoHeaderActive = "info-header-active"

    const menu = (buttonActive: HTMLImageElement, buttonInactive: HTMLImageElement) =>{
        buttonActive.addEventListener("click", ()=>{
            ul.classList.toggle(ulActive)
            infoHeader.classList.toggle(infoHeaderActive)
            buttonActive.style.display = "none"
            buttonInactive.style.display = "inline"
        })
    }

    menu(hamburguer, closeMenu)
    menu(closeMenu, hamburguer)
    
}