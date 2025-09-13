import { Data } from "./retos-intermedios/app";

namespace home {
    const img1 = document.querySelector(".img-1") as HTMLImageElement
    const img2 = document.querySelector(".img-2") as HTMLImageElement

    const t1 = document.querySelector(".t1") as HTMLHeadingElement
    const t2 = document.querySelector(".t2") as HTMLHeadingElement

    const d1 = document.querySelector(".d1") as HTMLParagraphElement
    const d2 = document.querySelector(".d2") as HTMLParagraphElement

    const f1 = document.querySelector(".f1") as HTMLParagraphElement
    const f2 = document.querySelector(".f2") as HTMLParagraphElement

    const url1 = document.querySelector(".url1") as HTMLAnchorElement
    const url2 = document.querySelector(".url2") as HTMLAnchorElement

    fetch("./retos-intermedios/intermediate.json")
        .then((response)=> response.json())
        .then((data: Data[]) =>{
            img1.src = `./retos-intermedios/${data[0].imgUrl}`
            img2.src = `./retos-intermedios/${data[1].imgUrl}`

            t1.innerText = `${data[0].name}`
            t2.innerText = `${data[1].name}`

            d1.innerHTML = `${data[0].description}`
            d2.innerHTML = `${data[1].description}`

            f1.innerText = `${data[0].filter}`
            f2.innerText = `${data[1].filter}`

            url1.href = `./retos-intermedios/${data[0].url}`
            url2.href = `./retos-intermedios/${data[1].url}`
        })
        .catch((error) => console.log("error al cargar los datos", error))
}

