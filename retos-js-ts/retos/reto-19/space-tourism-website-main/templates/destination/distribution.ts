namespace spaceTourism{
    interface image{
        png: string
        webp: string
    }

    interface infoPlanets {
        name: string
        images: image
        description: string
        distance: string
        travel: string
    }

    interface options {
        destinations: infoPlanets[]
    }
    
    const moon = document.querySelector(".moon") as HTMLLIElement
    const mars = document.querySelector(".mars") as HTMLLIElement
    const europa = document.querySelector(".eurpoa") as HTMLLIElement
    const titan = document.querySelector(".titan") as HTMLLIElement
    
    const planets = [moon, europa, mars, titan] //array creado agregar eliminar clases
    
    const planetImg = document.querySelector(".planet-img") as HTMLImageElement
    const planetName = document.querySelector(".planet-name") as HTMLParagraphElement
    const planetInfo = document.querySelector(".planet-info") as HTMLElement
    const km = document.querySelector(".km") as HTMLParagraphElement
    const time = document.querySelector(".time") as HTMLParagraphElement
    

    fetch("../../data.json")
        .then(response => response.json())
        .then((data: options)=>{
            const distribution = data.destinations
            
            const click = (planet: HTMLLIElement) =>{
                
                planet.addEventListener("click", ()=>{
                    const id = planet.id
                    const planetDistribution = distribution.find((element) => element.name === id) 
                    
                    for (const planet of planets) {
                        planet.classList.remove("button-active")
                    }
                    planet.classList.add("button-active")

                    planetImg.src = `${planetDistribution?.images.webp}`
                    planetName.innerText = `${planetDistribution?.name.toUpperCase()}`
                    planetInfo.innerText = `${planetDistribution?.description}`
                    km.innerText = `${planetDistribution?.distance}`
                    time.innerText = `${planetDistribution?.travel}`
                })
            }
            
            click(mars)
            click(moon)
            click(europa)
            click(titan)
        })
        
    

}

