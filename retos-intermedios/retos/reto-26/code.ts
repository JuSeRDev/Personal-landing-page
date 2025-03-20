
namespace challenge26 {
    const description = document.querySelector(".text") as HTMLParagraphElement
    const name = document.querySelector(".name") as HTMLParagraphElement
    const experience = document.querySelector(".experience") as HTMLParagraphElement
    const image = document.querySelector(".img") as HTMLImageElement
    
    const persons = [
        {
            description: `"I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. "`,
            name: "Tanya Sinclair",
            experience: "UX Engineer",
            img: "coding-bootcamp-testimonials-slider-master/images/image-tanya.jpg"
        },{
            description: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
            name: "John Tarkpor",
            experience: "Junior Front-end Developer",
            img: "coding-bootcamp-testimonials-slider-master/images/image-john.jpg"
        }
    ]

    let currentIndex = 0

    const updateUI = () =>{
        description.innerText = persons[currentIndex].description
        name.innerText = persons[currentIndex].name
        experience.innerText = persons[currentIndex].experience
        image.src = persons[currentIndex].img
    }

    updateUI()

    const back = document.querySelector(".button-back") as HTMLButtonElement
    const next = document.querySelector(".button-next") as HTMLButtonElement

    back.addEventListener("click", ()=>{
        if (currentIndex > 0) {
            currentIndex--
            updateUI()
        }
    })

    next.addEventListener("click", ()=>{
        if (currentIndex < persons.length -1) {
            currentIndex++
            updateUI()
        }
    })
}
