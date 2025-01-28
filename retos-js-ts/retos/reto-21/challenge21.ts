const selects = document.querySelectorAll(".f-right") as NodeListOf<HTMLParagraphElement>
const sectionFour = document.querySelector(".section-four") as HTMLElement
const backgroundDark = document.querySelector(".background-dark") as HTMLDivElement
const externals = document.querySelectorAll(".external") as NodeListOf<HTMLDivElement>
const internals = document.querySelectorAll(".internal") as NodeListOf<HTMLDivElement>
const footerSfs = document.querySelectorAll(".footer-sf") as NodeListOf<HTMLDivElement>
const closeMenu = document.querySelector(".icon-close-menu") as SVGSVGElement
const buttonProject = document.querySelector(".button1-so") as HTMLParagraphElement
const input = document.querySelectorAll(".input") as NodeListOf<HTMLInputElement>

const internalActive = "internal-active"
const footerShow = "footer-sf-show"

const toggle = (param: string) =>{
    sectionFour.style.display = `${param}`
    backgroundDark.style.display = `${param}`
}

const toggleSelect = (i: number)=>{
    internals[i].classList.toggle(internalActive)
    if (i === 1) {
        footerSfs[0].classList.toggle("footer-sf-show")
    } else if (i === 2) {
        footerSfs[1].classList.toggle("footer-sf-show")
    }
}

const removeArrays = (param: NodeListOf<HTMLDivElement>, classes: string) =>{
    param.forEach(element => element.classList.remove(classes));
}

buttonProject.addEventListener("click", ()=> toggle("inline") )

selects.forEach((select, i) => {
    select.addEventListener("click", ()=> {
        toggle("inline")

        if (i === 0) {
            internals[1].classList.toggle(internalActive)
            footerSfs[0].classList.toggle("footer-sf-show")
        } else if (i === 1){
            internals[2].classList.toggle(internalActive)
            footerSfs[1].classList.toggle("footer-sf-show")
        }
    })
});

externals.forEach((external, i) => {
    external.addEventListener("click", ()=>{
        removeArrays(internals, internalActive)
        removeArrays(footerSfs, footerShow)
        toggleSelect(i)
    })
});


closeMenu.addEventListener("click", ()=>{
    removeArrays(internals, internalActive)
    removeArrays(footerSfs, footerShow)
    toggle("none")
})

const cash = document.querySelector(".cash-inicial") as HTMLSpanElement