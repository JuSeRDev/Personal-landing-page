const selects = document.querySelectorAll(".f-right") as NodeListOf<HTMLParagraphElement>
const sectionFour = document.querySelector(".section-four") as HTMLElement
const backgroundDark = document.querySelector(".background-dark") as HTMLDivElement
const externals = document.querySelectorAll(".external") as NodeListOf<HTMLDivElement>
const internals = document.querySelectorAll(".internal") as NodeListOf<HTMLDivElement>
const footerSfs = document.querySelectorAll(".footer-sf") as NodeListOf<HTMLDivElement>
const closeMenu = document.querySelector(".icon-close-menu") as SVGSVGElement
const buttonProject = document.querySelector(".button1-so") as HTMLParagraphElement
const inputs = document.querySelectorAll(".input") as NodeListOf<HTMLInputElement>
const buttonContinue = document.querySelectorAll(".continue-sf") as NodeListOf<HTMLParagraphElement>
const sectionFive = document.querySelector(".section-five") as HTMLElement
const buttonGo = document.querySelector(".go") as HTMLParagraphElement
const valueSfs = document.querySelectorAll(".value-sf") as NodeListOf<HTMLSpanElement>
const totalCash = document.querySelector(".cash-inicial") as HTMLParagraphElement

const regex = /^[0-9]*$/
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

inputs.forEach(input => {
    input.addEventListener("input", (e)=>{
        const target = e.target as HTMLInputElement
        if (!regex.test(target.value)) {
            target.value = target.value.replace(/[^0-9]/g, "")
        }
    })
});


const capital = (param: string) =>{
    let capitalStr = totalCash.textContent
    if (capitalStr) {
        let CapitalCorrection = capitalStr.replace(/[,\.]/g, "")
        let capitalNumber = Number(CapitalCorrection)
        let resultNumber = capitalNumber + Number(param)
        let result = resultNumber.toLocaleString()
        totalCash.innerHTML = result
    }
}

buttonContinue.forEach(button => {
    button.addEventListener("click", (e)=>{
        if (inputs[0].value < "25" && inputs[1].value < "75" ) {
            e.preventDefault()
        } else {
            sectionFive.style.display = "inline"
            sectionFour.style.display = "none"
            removeArrays(internals, internalActive)
            removeArrays(footerSfs, footerShow)
            inputs.forEach((input, i) => {
                if (input.value > "") {
                    capital(input.value)
                    let value = Number(valueSfs[i].textContent)
                    value = value -1
                    let valueStr = value.toString()
                    valueSfs[i].innerText = valueStr
                }
                input.value = ""
            })
        }
    })
});

buttonGo.addEventListener("click", ()=>{
    sectionFive.style.display = "none"
    backgroundDark.style.display = "none"
})