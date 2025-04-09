const bottomBG = document.querySelector(".botton-bg") as HTMLDivElement
const bottom = document.querySelector(".botton") as HTMLDivElement
const body = document.querySelector("body") as HTMLElement
const cards = document.querySelectorAll(".card") as NodeListOf<HTMLDivElement>
const cardToday = document.querySelectorAll(".card-today") as NodeListOf<HTMLDivElement>
const blackAndWhite = document.querySelectorAll(".black-and-white") as NodeListOf<HTMLParagraphElement>

const body_DM = "body-dm"
const bottomBG_DM = "botton-bg-dm"
const bottomActive = "botton-active"
const whiteText = "black-and-white"
const card_DM = "card-dm"
const textActive = "back-and-white-active"

const changeBG = (element: NodeListOf<HTMLDivElement>, classActive: string) =>{
    element.forEach(bg => {
        bg.classList.toggle(classActive)
    });
}


bottomBG.addEventListener("click", ()=>{
    body.classList.toggle(body_DM)
    bottom.classList.toggle(bottomActive)
    bottomBG.classList.toggle(bottomBG_DM)
    blackAndWhite
    changeBG(cards, card_DM)
    changeBG(cardToday, card_DM)
    changeBG(blackAndWhite, textActive)
})