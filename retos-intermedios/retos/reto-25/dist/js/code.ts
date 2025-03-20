namespace challenge25 {
    const menuOpen = document.querySelector(".menu-toggle") as HTMLButtonElement
    const menuClose = document.querySelector(".menu-close") as HTMLButtonElement
    const header = document.querySelector("header") as HTMLElement
    const nav = document.querySelector(".nav-list") as HTMLUListElement
    const headerContent = document.querySelector(".header-content") as HTMLParagraphElement
    
    const headerAtive = "header-active"
    const navActive = "nav-list-active"

    const menu = (button:HTMLButtonElement, menuClosed: string, other:string) =>{
        button.addEventListener("click", ()=>{
            nav.classList.toggle(navActive)
            menuOpen.style.display = other
            menuClose.style.display = menuClosed
            if (other === "flex") {
                setTimeout(()=>{
                    header.classList.toggle(headerAtive)
                    headerContent.style.display = other
                },300)
            } else{
                header.classList.toggle(headerAtive)
                headerContent.style.display = other
            }
        })
    }
    menu(menuOpen, "flex", "none")
    menu(menuClose, "none", "flex")
}