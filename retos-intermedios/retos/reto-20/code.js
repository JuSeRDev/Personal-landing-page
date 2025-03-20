"use strict";
const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu");
hamburguer.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
});
