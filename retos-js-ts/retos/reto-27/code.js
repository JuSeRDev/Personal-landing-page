"use strict";
const bottomBG = document.querySelector(".botton-bg");
const bottom = document.querySelector(".botton");
const body = document.querySelector("body");
const cards = document.querySelectorAll(".card");
const cardToday = document.querySelectorAll(".card-today");
const blackAndWhite = document.querySelectorAll(".black-and-white");
const body_DM = "body-dm";
const bottomBG_DM = "botton-bg-dm";
const bottomActive = "botton-active";
const whiteText = "black-and-white";
const card_DM = "card-dm";
const textActive = "back-and-white-active";
const changeBG = (element, classActive) => {
    element.forEach(bg => {
        bg.classList.toggle(classActive);
    });
};
bottomBG.addEventListener("click", () => {
    body.classList.toggle(body_DM);
    bottom.classList.toggle(bottomActive);
    bottomBG.classList.toggle(bottomBG_DM);
    blackAndWhite;
    changeBG(cards, card_DM);
    changeBG(cardToday, card_DM);
    changeBG(blackAndWhite, textActive);
});
