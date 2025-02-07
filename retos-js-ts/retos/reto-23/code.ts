const range = document.querySelector(".range") as HTMLInputElement
const numberPageviews = document.querySelector(".number-pageviews") as HTMLSpanElement
const money = document.querySelector(".money") as HTMLSpanElement as HTMLSpanElement
const toggleContainer = document.querySelector(".toggle-switches-container") as HTMLDivElement
const toggleSwitches = document.querySelector(".toggle-switches") as HTMLDivElement

const pageviews: string[] = ["10K", "50K", "100K", "500K", "1M" ]
const month: number[] = [8.00, 12.00, 16.00, 24.00, 36.00] 
const monthOff: string[] = month.map(price => (price - (price * 25)/100).toFixed(2))

const toggleActive: string = "toggle-switches-active"
const toggleContainerActvie: string = "toggle-switches-container-active"

const updateTrackColor = (value:number) =>{
    const max = 4
    let negative = (max - value)*25
    let positive = 100 - negative
    range.style.background = `linear-gradient(to right, var(--Soft-Cyan-Full-Slider-Bar) ${positive}%, var(--Light-Grayish-Blue-Empty-Slider-Bar) ${negative}%)`
}

const updateValues = (value:number) =>{
    numberPageviews.innerText = pageviews[value]
    const isDiscounted = toggleSwitches.classList.contains(toggleActive)
    money.innerText = `$${(isDiscounted ? monthOff[value] : month[value].toFixed(2))}`
}

range.addEventListener("input", ()=>{
    const value = Number(range.value)
    updateTrackColor(value)
    updateValues(value)
})

toggleContainer.addEventListener("click", ()=>{
    toggleSwitches.classList.toggle(toggleActive)
    toggleContainer.classList.toggle(toggleContainerActvie)
    updateValues(Number(range.value))
})