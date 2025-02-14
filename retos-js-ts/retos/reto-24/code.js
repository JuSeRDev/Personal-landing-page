"use strict";
var Reto24;
(function (Reto24) {
    const hamburguer = document.querySelector('.hamburguer');
    const iconClose = document.querySelector('.icon-close');
    const nav = document.querySelector('nav');
    const liHeader = document.querySelectorAll(".li-header");
    const ulHeader = document.querySelectorAll(".ul-header");
    const arrow = document.querySelectorAll(".arrow");
    const activeNav = (botton, hidden, visibility) => {
        botton.addEventListener("click", () => {
            nav.style.display = hidden;
            hamburguer.style.display = visibility;
            iconClose.style.display = hidden;
        });
    };
    activeNav(hamburguer, "flex", "none");
    activeNav(iconClose, "none", "flex");
    const active = ["ul-header-active", "arrow-active"];
    liHeader.forEach((element, i) => {
        element.addEventListener("click", () => {
            const isActive = ulHeader[i].classList.contains(active[0]);
            ulHeader.forEach((ul, ulIndex) => {
                ul.classList.remove(active[0]);
                arrow[ulIndex].classList.remove(active[1]);
            });
            if (!isActive) {
                ulHeader[i].classList.add(active[0]);
                arrow[i].classList.add(active[1]);
            }
        });
    });
})(Reto24 || (Reto24 = {}));
