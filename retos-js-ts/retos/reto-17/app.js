"use strict";
const contInfoGrid = document.querySelector(".container-info-grid");
const init = (data, dates, date, p1, p2, p3) => {
    contInfoGrid.innerHTML = "";
    data.forEach(element => {
        let title = element.title;
        let classes = element.class;
        let current = element.timeframes[dates].current.toString();
        let previous = element.timeframes[dates].previous.toString();
        contInfoGrid.innerHTML += `
        <div class="container-card-outside ${classes}">
            <div class="container-card-inside">
                <div class="header-card">
                <p class="title">${title}</p>
                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                </div>
                <div class="timer">
                    <p class="hours">${current}hrs</p>
                    <p class="last">Last ${date} - ${previous}hrs</p>
                </div>
            </div>
        </div>
        `;
    });
    if (p1 && p2 && p3) {
        updateStyle(p1, p2, p3);
    }
};
const updateStyle = (element1, element2, element3) => {
    element1.style.color = "white";
    element2.style.color = "";
    element3.style.color = "";
};
fetch("./data.json")
    .then(response => response.json())
    .then((data) => {
    const days = document.querySelector(".daily");
    const weeks = document.querySelector(".weekly");
    const months = document.querySelector(".monthly");
    init(data, "daily", "day", days, weeks, months);
    days.addEventListener("click", () => {
        init(data, "daily", "day", days, weeks, months);
    });
    weeks.addEventListener("click", () => {
        init(data, "weekly", "week", weeks, days, months);
    });
    months.addEventListener("click", () => {
        init(data, "monthly", "month", months, weeks, days);
    });
})
    .catch((error) => console.error("tenemos un error", error));
