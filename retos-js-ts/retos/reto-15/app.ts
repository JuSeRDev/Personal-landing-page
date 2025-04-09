interface Data {
    day: string;
    amount: number;
  }

fetch("./data.json")
.then(response => response.json())
.then((data: Data[]) => {
    data.forEach((item: Data) => {
        let amount: string = item.amount.toString()
        const dayEment = document.querySelector(`.${item.day}`) as HTMLParagraphElement
        if (dayEment) {
            dayEment.innerHTML = `$${amount}`
        } 
    });
})

const bars = document.querySelectorAll(".bar") as NodeListOf<HTMLDivElement>

bars.forEach(bar => {
    const amountElement = bar.previousElementSibling as HTMLDivElement //previousElementSibling agrega el hermano del div que se llama (bar)

    let isClicked: boolean = false

    bar.addEventListener("mouseover", ()=>{
        if (!isClicked) {
            amountElement.classList.add("amount-active")
        }
    })

    bar.addEventListener("mouseout", ()=>{
        if (!isClicked) {
            amountElement.classList.remove("amount-active")
        }
    })

    bar.addEventListener("click", ()=>{
        isClicked = !isClicked
        if (isClicked) {
            amountElement.classList.add("amount-active")
        }else{
            amountElement.classList.remove("amount-active")
        }
    })

});
