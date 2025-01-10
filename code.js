var home;
(function (home) {
    const img1 = document.querySelector(".img-1");
    const img2 = document.querySelector(".img-2");
    const t1 = document.querySelector(".t1");
    const t2 = document.querySelector(".t2");
    const d1 = document.querySelector(".d1");
    const d2 = document.querySelector(".d2");
    const f1 = document.querySelector(".f1");
    const f2 = document.querySelector(".f2");
    const url1 = document.querySelector(".url1");
    const url2 = document.querySelector(".url2");
    fetch("./retos-js-ts/data.json")
        .then((response) => response.json())
        .then((data) => {
        img1.src = `./retos-js-ts/${data[0].imgUrl}`;
        img2.src = `./retos-js-ts/${data[1].imgUrl}`;
        t1.innerText = `${data[0].name}`;
        t2.innerText = `${data[1].name}`;
        d1.innerHTML = `${data[0].description}`;
        d2.innerHTML = `${data[1].description}`;
        f1.innerText = `${data[0].filter}`;
        f2.innerText = `${data[1].filter}`;
        url1.href = `./retos-js-ts/${data[0].url}`;
        url2.href = `./retos-js-ts/${data[1].url}`;
    })
        .catch((error) => console.log("error al cargar los datos", error));
})(home || (home = {}));
export {};
