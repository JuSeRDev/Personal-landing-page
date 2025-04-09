"use strict";
var challenge28;
(function (challenge28) {
    const hamburguer = document.querySelector(".hamburguer");
    const closeMenu = document.querySelector(".close-menu");
    const ul = document.querySelector(".ul");
    const infoHeader = document.querySelector(".info-header");
    const ulActive = "ul-active";
    const infoHeaderActive = "info-header-active";
    const menu = (buttonActive, buttonInactive) => {
        buttonActive.addEventListener("click", () => {
            ul.classList.toggle(ulActive);
            infoHeader.classList.toggle(infoHeaderActive);
            buttonActive.style.display = "none";
            buttonInactive.style.display = "inline";
        });
    };
    menu(hamburguer, closeMenu);
    menu(closeMenu, hamburguer);
})(challenge28 || (challenge28 = {}));
