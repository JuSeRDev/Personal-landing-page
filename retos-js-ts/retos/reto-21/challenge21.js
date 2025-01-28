var selects = document.querySelectorAll(".f-right");
var sectionFour = document.querySelector(".section-four");
var backgroundDark = document.querySelector(".background-dark");
var externals = document.querySelectorAll(".external");
var internals = document.querySelectorAll(".internal");
var footerSfs = document.querySelectorAll(".footer-sf");
selects.forEach(function (select) {
    select.addEventListener("click", function () {
        sectionFour.style.display = "inline";
        backgroundDark.style.display = "inline";
    });
});
var internalActive = "internal-active";
var footerShow = "footer-sf-show";
var removeArrays = function (param, classes) {
    param.forEach(function (element) { return element.classList.remove(classes); });
};
externals.forEach(function (external, i) {
    externals[i].addEventListener("click", function () {
        removeArrays(internals, internalActive);
        removeArrays(footerSfs, footerShow);
        internals[i].classList.toggle(internalActive);
        if (internals[1].classList.contains(internalActive)) {
            removeArrays(footerSfs, footerShow);
            footerSfs[0].classList.toggle("footer-sf-show");
        }
        else if (internals[2].classList.contains(internalActive)) {
            removeArrays(footerSfs, footerShow);
            footerSfs[1].classList.toggle("footer-sf-show");
        }
    });
});
