"use strict";
var spaceTourism;
(function (spaceTourism) {
    const moon = document.querySelector(".moon");
    const mars = document.querySelector(".mars");
    const europa = document.querySelector(".eurpoa");
    const titan = document.querySelector(".titan");
    const planets = [moon, europa, mars, titan]; //array creado agregar eliminar clases
    const planetImg = document.querySelector(".planet-img");
    const planetName = document.querySelector(".planet-name");
    const planetInfo = document.querySelector(".planet-info");
    const km = document.querySelector(".km");
    const time = document.querySelector(".time");
    fetch("../../data.json")
        .then(response => response.json())
        .then((data) => {
        const distribution = data.destinations;
        const click = (planet) => {
            planet.addEventListener("click", () => {
                const id = planet.id;
                const planetDistribution = distribution.find((element) => element.name === id);
                for (const planet of planets) {
                    planet.classList.remove("button-active");
                }
                planet.classList.add("button-active");
                planetImg.src = `${planetDistribution === null || planetDistribution === void 0 ? void 0 : planetDistribution.images.webp}`;
                planetName.innerText = `${planetDistribution === null || planetDistribution === void 0 ? void 0 : planetDistribution.name.toUpperCase()}`;
                planetInfo.innerText = `${planetDistribution === null || planetDistribution === void 0 ? void 0 : planetDistribution.description}`;
                km.innerText = `${planetDistribution === null || planetDistribution === void 0 ? void 0 : planetDistribution.distance}`;
                time.innerText = `${planetDistribution === null || planetDistribution === void 0 ? void 0 : planetDistribution.travel}`;
            });
        };
        click(mars);
        click(moon);
        click(europa);
        click(titan);
    });
})(spaceTourism || (spaceTourism = {}));
