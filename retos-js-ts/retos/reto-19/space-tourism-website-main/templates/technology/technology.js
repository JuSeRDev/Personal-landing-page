import { changeBgImg, displayMenu } from "../modules/index.js";
import {
  getTechnologyData,
  modifyTechnologyName,
  modifyTechnologyDescription,
  modifyTechnologyImg,
  addButtonClass,
  removeButtonClass,
} from "./modules/index.js";

changeBgImg('technology', false)
let index = 0;
let isClose = true

const firstButton = document.querySelector(".button1");
const secondButton = document.querySelector(".button2");
const thirdButton = document.querySelector(".button3");
const technologyName = document.querySelector(".section__h2");
const technologyDescription = document.querySelector(".section__p");
const technologyImg = document.querySelector(".main__img");
const closeMenu = document.querySelector('.list-mobile')
const items = document.querySelector('.items')
const menuImg = document.querySelector('.list-mobile-img')

async function modifyElements() {
  const technologyObject = await getTechnologyData();
  modifyTechnologyName(technologyObject, technologyName, index);
  modifyTechnologyDescription(technologyObject, technologyDescription, index);
  modifyTechnologyImg(technologyObject, technologyImg, index);
}

modifyElements()

firstButton.addEventListener("click", () => {
  index = 0;
  modifyElements();
  addButtonClass(firstButton)
  removeButtonClass(secondButton)
  removeButtonClass(thirdButton)
});
secondButton.addEventListener("click", () => {
  index = 1;
  modifyElements();
  removeButtonClass(firstButton)
  addButtonClass(secondButton)
  removeButtonClass(thirdButton)
});
thirdButton.addEventListener("click", () => {
  index = 2;
  modifyElements();
  removeButtonClass(firstButton)
  removeButtonClass(secondButton)
  addButtonClass(thirdButton)
});

menuImg.addEventListener('click', () => {
  isClose = !isClose
  displayMenu(closeMenu, items, menuImg, isClose, false)
})