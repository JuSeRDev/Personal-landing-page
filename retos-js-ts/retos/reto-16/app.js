"use strict";
const features = document.querySelector(".features");
const arrowFeatures = document.querySelector(".arrow-features");
const dropdownFeatures = document.querySelector(".dropdown-features");
const company = document.querySelector(".company");
const arrowCompany = document.querySelector(".arrow-company");
const dropdownCompany = document.querySelector(".dropdown-company");
const click = (button, class1, class2) => {
    button.addEventListener("click", () => {
        class1.classList.toggle("arrow-rotate");
        class2.classList.toggle("menu-item-active");
    });
};
click(company, arrowCompany, dropdownCompany);
click(features, arrowFeatures, dropdownFeatures);
const iconMenu = document.querySelector(".icon-menu");
const naviMenu = document.querySelector(".navi-menu");
const iconCloseMenu = document.querySelector(".icon-close-menu");
const clickNavi = (button, class1) => {
    button.addEventListener("click", () => {
        class1.classList.toggle("nave-menu-active");
    });
};
clickNavi(iconMenu, naviMenu);
clickNavi(iconCloseMenu, naviMenu);
