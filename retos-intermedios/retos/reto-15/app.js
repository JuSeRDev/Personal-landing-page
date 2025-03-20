"use strict";
fetch("./data.json")
    .then(response => response.json())
    .then((data) => {
    data.forEach((item) => {
        let amount = item.amount.toString();
        const dayEment = document.querySelector(`.${item.day}`);
        if (dayEment) {
            dayEment.innerHTML = `$${amount}`;
        }
    });
});
const bars = document.querySelectorAll(".bar");
bars.forEach(bar => {
    const amountElement = bar.previousElementSibling; //previousElementSibling agrega el hermano del div que se llama (bar)
    let isClicked = false;
    bar.addEventListener("mouseover", () => {
        if (!isClicked) {
            amountElement.classList.add("amount-active");
        }
    });
    bar.addEventListener("mouseout", () => {
        if (!isClicked) {
            amountElement.classList.remove("amount-active");
        }
    });
    bar.addEventListener("click", () => {
        isClicked = !isClicked;
        if (isClicked) {
            amountElement.classList.add("amount-active");
        }
        else {
            amountElement.classList.remove("amount-active");
        }
    });
});
