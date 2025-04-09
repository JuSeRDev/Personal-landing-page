namespace Reto24 {
    const hamburguer = document.querySelector('.hamburguer') as HTMLImageElement
    const iconClose = document.querySelector('.icon-close') as HTMLImageElement
    const nav = document.querySelector('nav') as HTMLElement
    const liHeader = document.querySelectorAll(".li-header") as NodeListOf<HTMLElement>
    const ulHeader = document.querySelectorAll(".ul-header") as NodeListOf<HTMLElement>
    const arrow = document.querySelectorAll(".arrow") as NodeListOf<HTMLImageElement>

    const activeNav = (botton: HTMLElement, hidden: string, visibility: string ) => {
        botton.addEventListener("click", ()=>{
            nav.style.display = hidden
            hamburguer.style.display = visibility
            iconClose.style.display = hidden
        })
    }

    activeNav(hamburguer, "flex", "none")
    activeNav(iconClose, "none", "flex")

    const active: string[] = ["ul-header-active", "arrow-active" ]

    liHeader.forEach((element, i) =>{
        element.addEventListener("click", ()=>{
            const isActive = ulHeader[i].classList.contains(active[0])

            ulHeader.forEach((ul, ulIndex) =>{
                ul.classList.remove(active[0])
                arrow[ulIndex].classList.remove(active[1])
            })
            
            if (!isActive) {
                ulHeader[i].classList.add(active[0])
                arrow[i].classList.add(active[1])
            }
        })
    })
}
