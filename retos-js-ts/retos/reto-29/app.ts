
namespace challenge29 {
  const button = document.querySelector(".circle") as HTMLParagraphElement
  const prices = document.querySelectorAll(".price") as NodeListOf<HTMLParagraphElement>

  const circleActive: string = "circle-active"
  const priceAnnually: string[] = ["$199.99", "$249.99", "$399.99"]
  const priceMonthly: string[] = ["$19.99", "$24.99", "$39.99"]
  
  const priceEdit = () => {
    const isActive = button.classList.contains(circleActive)
    prices.forEach((price, i) => price.innerText = isActive ? priceMonthly[i] : priceAnnually[i] );
  }

  button.addEventListener("click", ()=> {
    button.classList.toggle(circleActive)
    priceEdit()
  })
}