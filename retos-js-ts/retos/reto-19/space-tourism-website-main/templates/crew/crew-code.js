"use strict";
var spaceTourismDate;
(function (spaceTourismDate) {
    const buttons = document.querySelectorAll(".button");
    const mission = document.querySelector(".mission");
    const name = document.querySelector(".name");
    const text = document.querySelector(".text");
    const photo = document.querySelector(".photo");
    fetch("../../data.json")
        .then(response => response.json())
        .then((data) => {
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                for (const button of buttons) {
                    button.classList.remove("button-active");
                }
                button.classList.add("button-active");
                let id = button.id;
                const option = data.crew;
                const person = option.find((element) => element.name === id);
                mission.innerText = `${person?.role.toUpperCase()}`;
                name.innerText = `${person?.name.toUpperCase()}`;
                text.innerText = `${person?.bio}`;
                photo.src = `${person?.images.webp}`;
            });
        });
    });
})(spaceTourismDate || (spaceTourismDate = {}));
