namespace challenge21{
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
    const person = document.querySelector(".persons") as HTMLParagraphElement
    const lineInternal = document.querySelector(".line-internal") as HTMLDivElement
    const hamburguer = document.querySelector(".hamburguer") as HTMLImageElement
    const hamburguerClose = document.querySelector(".close-menu-nav") as HTMLImageElement
    const menu = document.querySelector(".menu") as HTMLElement

    const regex = /^[0-9]*$/
    const internalActive = "internal-active"
    const footerShow = "footer-sf-show"
    const total: number = 100000

    const progressLine = (param: HTMLParagraphElement) =>{
        let num = Number(param.textContent?.replace(/[,\.]/g, ""))
        let result: number = (num / total) * 100
        lineInternal.style.width = `${result}%`
    }

    progressLine(totalCash)

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
        inputs.forEach(input => input.value = "" );
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
        let totalPerosns = person.textContent
        if (capitalStr) {
            let result = (Number(capitalStr.replace(/[,\.]/g, "")) + Number(param)).toLocaleString()
            totalCash.innerHTML = result
        }
        if (totalPerosns) {
            let persons = (Number(totalPerosns.replace(/[,\.]/g, "")) +1).toLocaleString()
            person.innerText = persons
        }
    }


    buttonContinue.forEach(button => {
        button.addEventListener("click", (e)=>{
            let number1: number = Number(inputs[0].value)
            let number2: number = Number(inputs[1].value)
            let cash = Number(totalCash.textContent?.replace(/[,\.]/g, ""))

            if ((number1 < 25 || cash + number1 > total) && (number2 < 75 || cash + number1 > total) ) {
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
            progressLine(totalCash)
        })
    });

    buttonGo.addEventListener("click", ()=>{
        sectionFive.style.display = "none"
        backgroundDark.style.display = "none"
    })

    const menuNav = (action: HTMLImageElement, hidden: HTMLImageElement, display: string)=>{
        action.addEventListener("click", ()=>{
            let color: string = "linear-gradient(180deg, rgba(0,0,0,0.6054796918767507) 0%, rgba(255,255,255,0) 100%)"
            action.style.display = "none"
            hidden.style.display = "inline"
            menu.style.display = display
            backgroundDark.style.background = color
            backgroundDark.style.display = display
        })
    }
    menuNav(hamburguer, hamburguerClose, "inline")
    menuNav(hamburguerClose, hamburguer, "none")
    

}

