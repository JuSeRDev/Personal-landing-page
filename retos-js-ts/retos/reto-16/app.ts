const features = document.querySelector(".features") as HTMLLIElement
const arrowFeatures = document.querySelector(".arrow-features") as HTMLImageElement
const dropdownFeatures = document.querySelector(".dropdown-features") as HTMLUListElement

const company = document.querySelector(".company") as HTMLLIElement
const arrowCompany = document.querySelector(".arrow-company") as HTMLImageElement
const dropdownCompany = document.querySelector(".dropdown-company") as HTMLUListElement


const click = (button: HTMLLIElement ,class1: HTMLImageElement, class2: HTMLUListElement): void=>{
    button.addEventListener("click", ()=>{
        class1.classList.toggle("arrow-rotate")
        class2.classList.toggle("menu-item-active")
    })
}

click(company, arrowCompany, dropdownCompany)
click(features, arrowFeatures, dropdownFeatures)

const iconMenu = document.querySelector(".icon-menu") as HTMLImageElement
const naviMenu = document.querySelector(".navi-menu") as HTMLDivElement
const iconCloseMenu = document.querySelector(".icon-close-menu") as HTMLImageElement

const clickNavi = (button: HTMLImageElement, class1: HTMLDivElement)=>{
    button.addEventListener("click", ()=>{
        class1.classList.toggle("nave-menu-active")
    })
}

clickNavi(iconMenu, naviMenu)
clickNavi(iconCloseMenu, naviMenu)

