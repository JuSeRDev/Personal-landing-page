"use strict";
import { changeBgImg, displayMenu } from "../modules/index.js";

changeBgImg('crew', false)

const closeMenu = document.querySelector('.list-mobile')
const items = document.querySelector('.items')
const menuImg = document.querySelector('.list-mobile-img')
let isClose = true

var spaceTourismDate;
(function (spaceTourismDate) {
    const buttons = document.querySelectorAll(".button");
    const mission = document.querySelector(".mission");
    const name = document.querySelector(".name");
    const text = document.querySelector(".text");
    const photo = document.querySelector(".photo");
    fetch("../../data.json")
        .then(response => response.json())
        .then((data) => {
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                for (const button of buttons) {
                    button.classList.remove("button-active");
                }
                button.classList.add("button-active");
                let id = button.id;
                const option = data.crew;
                const person = option.find((element) => element.name === id);
                mission.innerText = `${person === null || person === void 0 ? void 0 : person.role.toUpperCase()}`;
                name.innerText = `${person === null || person === void 0 ? void 0 : person.name.toUpperCase()}`;
                text.innerText = `${person === null || person === void 0 ? void 0 : person.bio}`;
                photo.src = `${person === null || person === void 0 ? void 0 : person.images.webp}`;
            });
        });
    });
})(spaceTourismDate || (spaceTourismDate = {}));

menuImg.addEventListener('click', () => {
  isClose = !isClose
  displayMenu(closeMenu, items, menuImg, isClose, false)
})