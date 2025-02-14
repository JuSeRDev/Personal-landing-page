"use strict";
const range = document.querySelector(".range");
const numberPageviews = document.querySelector(".number-pageviews");
const money = document.querySelector(".money");
const toggleContainer = document.querySelector(".toggle-switches-container");
const toggleSwitches = document.querySelector(".toggle-switches");
const pageviews = ["10K", "50K", "100K", "500K", "1M"];
const month = [8.00, 12.00, 16.00, 24.00, 36.00];
const monthOff = month.map(price => (price - (price * 25) / 100).toFixed(2));
const toggleActive = "toggle-switches-active";
const toggleContainerActvie = "toggle-switches-container-active";
const updateTrackColor = (value) => {
    const max = 4;
    let negative = (max - value) * 25;
    let positive = 100 - negative;
    range.style.background = `linear-gradient(to right, var(--Soft-Cyan-Full-Slider-Bar) ${positive}%, var(--Light-Grayish-Blue-Empty-Slider-Bar) ${negative}%)`;
};
const updateValues = (value) => {
    numberPageviews.innerText = pageviews[value];
    const isDiscounted = toggleSwitches.classList.contains(toggleActive);
    money.innerText = `$${(isDiscounted ? monthOff[value] : month[value].toFixed(2))}`;
};
range.addEventListener("input", () => {
    const value = Number(range.value);
    updateTrackColor(value);
    updateValues(value);
});
toggleContainer.addEventListener("click", () => {
    toggleSwitches.classList.toggle(toggleActive);
    toggleContainer.classList.toggle(toggleContainerActvie);
    updateValues(Number(range.value));
});
