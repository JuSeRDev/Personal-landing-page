var selects = document.querySelectorAll(".f-right");
var sectionFour = document.querySelector(".section-four");
var backgroundDark = document.querySelector(".background-dark");
var externals = document.querySelectorAll(".external");
var internals = document.querySelectorAll(".internal");
var footerSfs = document.querySelectorAll(".footer-sf");
var closeMenu = document.querySelector(".icon-close-menu");
var buttonProject = document.querySelector(".button1-so");
var input = document.querySelectorAll(".input");
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
var cash = document.querySelector(".cash-inicial");
