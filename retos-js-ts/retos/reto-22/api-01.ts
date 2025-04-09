const urlApi01 = "https://api.adviceslip.com/advice"
const number = document.querySelector(".number") as HTMLParagraphElement
const text = document.querySelector(".text") as HTMLParagraphElement
const dice = document.querySelector(".container-dice") as HTMLDivElement

interface Slip{
    id: number
    advice: string
}

interface apiResponse{
    slip: Slip
}

const getMessage = async()=>{
    const response = await fetch(urlApi01)
    try {
        const data: apiResponse = await response.json()
        const id = data.slip.id.toString()
        const advice = data.slip.advice
        number.innerText = id
        text.innerHTML = advice
        
    } catch (error) {
        console.error(error)
    }
}

getMessage()

dice.addEventListener("click", ()=> getMessage())