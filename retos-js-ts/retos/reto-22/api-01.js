"use strict";
const urlApi01 = "https://api.adviceslip.com/advice";
const number = document.querySelector(".number");
const text = document.querySelector(".text");
const dice = document.querySelector(".container-dice");
const getMessage = async () => {
    const response = await fetch(urlApi01);
    try {
        const data = await response.json();
        const id = data.slip.id.toString();
        const advice = data.slip.advice;
        number.innerText = id;
        text.innerHTML = advice;
    }
    catch (error) {
        console.error(error);
    }
};
getMessage();
dice.addEventListener("click", () => getMessage());
