const selects = document.querySelectorAll(".f-right") as NodeListOf<HTMLParagraphElement>
const sectionFour = document.querySelector(".section-four") as HTMLElement
const backgroundDark = document.querySelector(".background-dark") as HTMLDivElement
const externals = document.querySelectorAll(".external") as NodeListOf<HTMLDivElement>
const internals = document.querySelectorAll(".internal") as NodeListOf<HTMLDivElement>
const footerSfs = document.querySelectorAll(".footer-sf") as NodeListOf<HTMLDivElement>


selects.forEach(select => {
    select.addEventListener("click", ()=>{
        sectionFour.style.display = "inline"
        backgroundDark.style.display = "inline"
    })
});

const internalActive = "internal-active"
const footerShow = "footer-sf-show"

const removeArrays = (param: NodeListOf<HTMLDivElement>, classes: string) =>{
    param.forEach(element => element.classList.remove(classes));
}

externals.forEach((external, i) => {
    externals[i].addEventListener("click", ()=>{

        removeArrays(internals, internalActive)
        removeArrays(footerSfs, footerShow)

        internals[i].classList.toggle(internalActive)
        if (internals[1].classList.contains(internalActive)) {
            removeArrays(footerSfs, footerShow)
            footerSfs[0].classList.toggle("footer-sf-show")
        } else if (internals[2].classList.contains(internalActive)) {
            removeArrays(footerSfs, footerShow)
            footerSfs[1].classList.toggle("footer-sf-show")
        }
    })
});
