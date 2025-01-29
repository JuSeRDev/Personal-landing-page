var challenge21;
(function (challenge21) {
    var selects = document.querySelectorAll(".f-right");
    var sectionFour = document.querySelector(".section-four");
    var backgroundDark = document.querySelector(".background-dark");
    var externals = document.querySelectorAll(".external");
    var internals = document.querySelectorAll(".internal");
    var footerSfs = document.querySelectorAll(".footer-sf");
    var closeMenu = document.querySelector(".icon-close-menu");
    var buttonProject = document.querySelector(".button1-so");
    var inputs = document.querySelectorAll(".input");
    var buttonContinue = document.querySelectorAll(".continue-sf");
    var sectionFive = document.querySelector(".section-five");
    var buttonGo = document.querySelector(".go");
    var valueSfs = document.querySelectorAll(".value-sf");
    var totalCash = document.querySelector(".cash-inicial");
    var person = document.querySelector(".persons");
    var lineInternal = document.querySelector(".line-internal");
    var hamburguer = document.querySelector(".hamburguer");
    var hamburguerClose = document.querySelector(".close-menu-nav");
    var menu = document.querySelector(".menu");
    var regex = /^[0-9]*$/;
    var internalActive = "internal-active";
    var footerShow = "footer-sf-show";
    var total = 100000;
    var progressLine = function (param) {
        var _a;
        var num = Number((_a = param.textContent) === null || _a === void 0 ? void 0 : _a.replace(/[,\.]/g, ""));
        var result = (num / total) * 100;
        lineInternal.style.width = "".concat(result, "%");
    };
    progressLine(totalCash);
    var toggle = function (param) {
        sectionFour.style.display = "".concat(param);
        backgroundDark.style.display = "".concat(param);
    };
    var toggleSelect = function (i) {
        internals[i].classList.toggle(internalActive);
        if (i === 1) {
            footerSfs[0].classList.toggle("footer-sf-show");
        }
        else if (i === 2) {
            footerSfs[1].classList.toggle("footer-sf-show");
        }
    };
    var removeArrays = function (param, classes) {
        param.forEach(function (element) { return element.classList.remove(classes); });
    };
    buttonProject.addEventListener("click", function () { return toggle("inline"); });
    selects.forEach(function (select, i) {
        select.addEventListener("click", function () {
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
    externals.forEach(function (external, i) {
        external.addEventListener("click", function () {
            removeArrays(internals, internalActive);
            removeArrays(footerSfs, footerShow);
            toggleSelect(i);
        });
    });
    closeMenu.addEventListener("click", function () {
        removeArrays(internals, internalActive);
        removeArrays(footerSfs, footerShow);
        toggle("none");
        inputs.forEach(function (input) { return input.value = ""; });
    });
    inputs.forEach(function (input) {
        input.addEventListener("input", function (e) {
            var target = e.target;
            if (!regex.test(target.value)) {
                target.value = target.value.replace(/[^0-9]/g, "");
            }
        });
    });
    var capital = function (param) {
        var capitalStr = totalCash.textContent;
        var totalPerosns = person.textContent;
        if (capitalStr) {
            var result = (Number(capitalStr.replace(/[,\.]/g, "")) + Number(param)).toLocaleString();
            totalCash.innerHTML = result;
        }
        if (totalPerosns) {
            var persons = (Number(totalPerosns.replace(/[,\.]/g, "")) + 1).toLocaleString();
            person.innerText = persons;
        }
    };
    buttonContinue.forEach(function (button) {
        button.addEventListener("click", function (e) {
            var _a;
            var number1 = Number(inputs[0].value);
            var number2 = Number(inputs[1].value);
            var cash = Number((_a = totalCash.textContent) === null || _a === void 0 ? void 0 : _a.replace(/[,\.]/g, ""));
            if ((number1 < 25 || cash + number1 > total) && (number2 < 75 || cash + number1 > total)) {
                e.preventDefault();
            }
            else {
                sectionFive.style.display = "inline";
                sectionFour.style.display = "none";
                removeArrays(internals, internalActive);
                removeArrays(footerSfs, footerShow);
                inputs.forEach(function (input, i) {
                    if (input.value > "") {
                        capital(input.value);
                        var value = Number(valueSfs[i].textContent);
                        value = value - 1;
                        var valueStr = value.toString();
                        valueSfs[i].innerText = valueStr;
                    }
                    input.value = "";
                });
            }
            progressLine(totalCash);
        });
    });
    buttonGo.addEventListener("click", function () {
        sectionFive.style.display = "none";
        backgroundDark.style.display = "none";
    });
    var menuNav = function (action, hidden, display) {
        action.addEventListener("click", function () {
            var color = "linear-gradient(180deg, rgba(0,0,0,0.6054796918767507) 0%, rgba(255,255,255,0) 100%)";
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
