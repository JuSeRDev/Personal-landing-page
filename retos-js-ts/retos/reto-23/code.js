var range = document.querySelector(".range");
var numberPageviews = document.querySelector(".number-pageviews");
var money = document.querySelector(".money");
var toggleContainer = document.querySelector(".toggle-switches-container");
var toggleSwitches = document.querySelector(".toggle-switches");
var pageviews = ["10K", "50K", "100K", "500K", "1M"];
var month = [8.00, 12.00, 16.00, 24.00, 36.00];
var monthOff = month.map(function (price) { return (price - (price * 25) / 100).toFixed(2); });
var toggleActive = "toggle-switches-active";
var toggleContainerActvie = "toggle-switches-container-active";
var updateTrackColor = function (value) {
    var max = 4;
    var negative = (max - value) * 25;
    var positive = 100 - negative;
    range.style.background = "linear-gradient(to right, var(--Soft-Cyan-Full-Slider-Bar) ".concat(positive, "%, var(--Light-Grayish-Blue-Empty-Slider-Bar) ").concat(negative, "%)");
};
var updateValues = function (value) {
    numberPageviews.innerText = pageviews[value];
    var isDiscounted = toggleSwitches.classList.contains(toggleActive);
    money.innerText = "$".concat((isDiscounted ? monthOff[value] : month[value].toFixed(2)));
};
range.addEventListener("input", function () {
    var value = Number(range.value);
    updateTrackColor(value);
    updateValues(value);
});
toggleContainer.addEventListener("click", function () {
    toggleSwitches.classList.toggle(toggleActive);
    toggleContainer.classList.toggle(toggleContainerActvie);
    updateValues(Number(range.value));
});
