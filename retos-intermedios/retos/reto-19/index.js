import { displayMenu, changeBgImg } from './space-tourism-website-main/templates/modules/index.js'

changeBgImg('home', true)

const closeMenu = document.querySelector('.list-mobile')
const items = document.querySelector('.items')
const menuImg = document.querySelector('.list-mobile-img')
let isClose = true

menuImg.addEventListener('click', () => {
  isClose = !isClose
  displayMenu(closeMenu, items, menuImg, isClose, true)
})