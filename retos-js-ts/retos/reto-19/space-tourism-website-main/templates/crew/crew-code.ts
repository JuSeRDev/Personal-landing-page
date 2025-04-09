namespace spaceTourismDate{

    interface imagesCrew{
        png: string
        webp: string
    }

    interface infoCrew{
        name: string
        images: imagesCrew
        role: string
        bio: string
      }

    interface options {
        crew: infoCrew[]
      }

      const buttons = document.querySelectorAll(".button") as NodeListOf<HTMLParagraphElement>
      const mission = document.querySelector(".mission") as HTMLParagraphElement
      const name = document.querySelector(".name") as HTMLParagraphElement
      const text = document.querySelector(".text") as HTMLParagraphElement
      const photo = document.querySelector(".photo") as HTMLImageElement
    
      fetch("../../data.json")
      .then(response => response.json())
      .then((data: options) =>{
        buttons.forEach(button => {
          button.addEventListener("click", ()=>{
            for (const button of buttons) {
              button.classList.remove("button-active")
            }
            button.classList.add("button-active")
            let id = button.id
            const option = data.crew
            const person = option.find((element)=>element.name === id)
            mission.innerText = `${person?.role.toUpperCase()}`
            name.innerText = `${person?.name.toUpperCase()}`
            text.innerText = `${person?.bio}`
            photo.src = `${person?.images.webp}`
          })
        });
        
      })
    
    }
