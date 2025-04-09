"use strict";
var challenge25;
(function (challenge25) {
    const menuOpen = document.querySelector(".menu-toggle");
    const menuClose = document.querySelector(".menu-close");
    const header = document.querySelector("header");
    const nav = document.querySelector(".nav-list");
    const headerContent = document.querySelector(".header-content");
    const headerAtive = "header-active";
    const navActive = "nav-list-active";
    const menu = (button, menuClosed, other) => {
        button.addEventListener("click", () => {
            nav.classList.toggle(navActive);
            menuOpen.style.display = other;
            menuClose.style.display = menuClosed;
            if (other === "flex") {
                setTimeout(() => {
                    header.classList.toggle(headerAtive);
                    headerContent.style.display = other;
                }, 300);
            }
            else {
                header.classList.toggle(headerAtive);
                headerContent.style.display = other;
            }
        });
    };
    menu(menuOpen, "flex", "none");
    menu(menuClose, "none", "flex");
})(challenge25 || (challenge25 = {}));
