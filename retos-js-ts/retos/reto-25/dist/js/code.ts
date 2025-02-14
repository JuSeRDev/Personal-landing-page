namespace challenge25 {
    const menuOpen = document.querySelector(".menu-toggle") as HTMLButtonElement
    const menuclose = document.querySelector(".menu-close") as HTMLButtonElement
    const header = document.querySelector("header") as HTMLElement
    const nav = document.querySelector(".nav-list") as HTMLUListElement
    
    const headerAtive = "header-active"
    const navActive = "nav-list-active"

    menuOpen.addEventListener("click", ()=>{
        header.classList.add(headerAtive)
        nav.classList.add(navActive)
    })

}