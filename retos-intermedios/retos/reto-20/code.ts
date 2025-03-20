const hamburguer = document.querySelector(".hamburguer") as HTMLImageElement
const menu = document.querySelector(".menu") as HTMLElement

hamburguer.addEventListener("click", ()=>{
    menu.classList.toggle("menu-active")
})