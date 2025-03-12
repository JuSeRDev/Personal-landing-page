"use strict";
var challenge29;
(function (challenge29) {
    const button = document.querySelector(".circle");
    const prices = document.querySelectorAll(".price");
    const circleActive = "circle-active";
    const priceAnnually = ["$199.99", "$249.99", "$399.99"];
    const priceMonthly = ["$19.99", "$24.99", "$39.99"];
    const priceEdit = () => {
        const isActive = button.classList.contains(circleActive);
        prices.forEach((price, i) => price.innerText = isActive ? priceMonthly[i] : priceAnnually[i]);
    };
    button.addEventListener("click", () => {
        button.classList.toggle(circleActive);
        priceEdit();
    });
})(challenge29 || (challenge29 = {}));
