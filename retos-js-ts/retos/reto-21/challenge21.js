"use strict";
var challenge21;
(function (challenge21) {
    const selects = document.querySelectorAll(".f-right");
    const sectionFour = document.querySelector(".section-four");
    const backgroundDark = document.querySelector(".background-dark");
    const externals = document.querySelectorAll(".external");
    const internals = document.querySelectorAll(".internal");
    const footerSfs = document.querySelectorAll(".footer-sf");
    const closeMenu = document.querySelector(".icon-close-menu");
    const buttonProject = document.querySelector(".button1-so");
    const inputs = document.querySelectorAll(".input");
    const buttonContinue = document.querySelectorAll(".continue-sf");
    const sectionFive = document.querySelector(".section-five");
    const buttonGo = document.querySelector(".go");
    const valueSfs = document.querySelectorAll(".value-sf");
    const totalCash = document.querySelector(".cash-inicial");
    const person = document.querySelector(".persons");
    const lineInternal = document.querySelector(".line-internal");
    const hamburguer = document.querySelector(".hamburguer");
    const hamburguerClose = document.querySelector(".close-menu-nav");
    const menu = document.querySelector(".menu");
    const regex = /^[0-9]*$/;
    const internalActive = "internal-active";
    const footerShow = "footer-sf-show";
    const total = 100000;
    const progressLine = (param) => {
        let num = Number(param.textContent?.replace(/[,\.]/g, ""));
        let result = (num / total) * 100;
        lineInternal.style.width = `${result}%`;
    };
    progressLine(totalCash);
    const toggle = (param) => {
        sectionFour.style.display = `${param}`;
        backgroundDark.style.display = `${param}`;
    };
    const toggleSelect = (i) => {
        internals[i].classList.toggle(internalActive);
        if (i === 1) {
            footerSfs[0].classList.toggle("footer-sf-show");
        }
        else if (i === 2) {
            footerSfs[1].classList.toggle("footer-sf-show");
        }
    };
    const removeArrays = (param, classes) => {
        param.forEach(element => element.classList.remove(classes));
    };
    buttonProject.addEventListener("click", () => toggle("inline"));
    selects.forEach((select, i) => {
        select.addEventListener("click", () => {
            toggle("inline");
            if (i === 0) {
                internals[1].classList.toggle(internalActive);
                footerSfs[0].classList.toggle("footer-sf-show");
            }
            else if (i === 1) {
                internals[2].classList.toggle(internalActive);
                footerSfs[1].classList.toggle("footer-sf-show");
            }
        });
    });
    externals.forEach((external, i) => {
        external.addEventListener("click", () => {
            removeArrays(internals, internalActive);
            removeArrays(footerSfs, footerShow);
            toggleSelect(i);
        });
    });
    closeMenu.addEventListener("click", () => {
        removeArrays(internals, internalActive);
        removeArrays(footerSfs, footerShow);
        toggle("none");
        inputs.forEach(input => input.value = "");
    });
    inputs.forEach(input => {
        input.addEventListener("input", (e) => {
            const target = e.target;
            if (!regex.test(target.value)) {
                target.value = target.value.replace(/[^0-9]/g, "");
            }
        });
    });
    const capital = (param) => {
        let capitalStr = totalCash.textContent;
        let totalPerosns = person.textContent;
        if (capitalStr) {
            let result = (Number(capitalStr.replace(/[,\.]/g, "")) + Number(param)).toLocaleString();
            totalCash.innerHTML = result;
        }
        if (totalPerosns) {
            let persons = (Number(totalPerosns.replace(/[,\.]/g, "")) + 1).toLocaleString();
            person.innerText = persons;
        }
    };
    buttonContinue.forEach(button => {
        button.addEventListener("click", (e) => {
            let number1 = Number(inputs[0].value);
            let number2 = Number(inputs[1].value);
            let cash = Number(totalCash.textContent?.replace(/[,\.]/g, ""));
            if ((number1 < 25 || cash + number1 > total) && (number2 < 75 || cash + number1 > total)) {
                e.preventDefault();
            }
            else {
                sectionFive.style.display = "inline";
                sectionFour.style.display = "none";
                removeArrays(internals, internalActive);
                removeArrays(footerSfs, footerShow);
                inputs.forEach((input, i) => {
                    if (input.value > "") {
                        capital(input.value);
                        let value = Number(valueSfs[i].textContent);
                        value = value - 1;
                        let valueStr = value.toString();
                        valueSfs[i].innerText = valueStr;
                    }
                    input.value = "";
                });
            }
            progressLine(totalCash);
        });
    });
    buttonGo.addEventListener("click", () => {
        sectionFive.style.display = "none";
        backgroundDark.style.display = "none";
    });
    const menuNav = (action, hidden, display) => {
        action.addEventListener("click", () => {
            let color = "linear-gradient(180deg, rgba(0,0,0,0.6054796918767507) 0%, rgba(255,255,255,0) 100%)";
            action.style.display = "none";
            hidden.style.display = "inline";
            menu.style.display = display;
            backgroundDark.style.background = color;
            backgroundDark.style.display = display;
        });
    };
    menuNav(hamburguer, hamburguerClose, "inline");
    menuNav(hamburguerClose, hamburguer, "none");
})(challenge21 || (challenge21 = {}));
