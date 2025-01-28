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
var regex = /^[0-9]*$/;
var internalActive = "internal-active";
var footerShow = "footer-sf-show";
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
    if (capitalStr) {
        var CapitalCorrection = capitalStr.replace(/[,\.]/g, "");
        var capitalNumber = Number(CapitalCorrection);
        var resultNumber = capitalNumber + Number(param);
        var result = resultNumber.toLocaleString();
        totalCash.innerHTML = result;
    }
};
buttonContinue.forEach(function (button) {
    button.addEventListener("click", function (e) {
        if (inputs[0].value < "25" && inputs[1].value < "75") {
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
    });
});
buttonGo.addEventListener("click", function () {
    sectionFive.style.display = "none";
    backgroundDark.style.display = "none";
});
