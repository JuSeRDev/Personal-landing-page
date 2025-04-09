const title = document.querySelectorAll(".subtitle")
const paragraph = document.querySelectorAll(".paragraph")
const plus = document.querySelectorAll(".plus")
const minus = document.querySelectorAll(".minus")

//* Esta opcion solamente oculta y muestra el parrafo modificando el display

/* title.forEach((subtitle, i)=>{
    title[i].addEventListener("click", ()=>{
        if (paragraph[i].style.display === "none") {
            paragraph[i].style.display = "flex"
            plus[i].style.display = "none"
            minus[i].style.display = "flex"
            
        }else{
            paragraph[i].style.display = "none"
            plus[i].style.display = "flex"
            minus[i].style.display = "none"
        }
    })
}) */


//* Esta opcion es mas interesante, esta logra hacerlo dinamico

title.forEach((subtitle, i)=>{
    subtitle.addEventListener("click", ()=>{
        // toggle hace que si la esta esta actica la descativa y si esta desactivada la activa
        paragraph[i].classList.toggle("open") 
            if (paragraph[i].classList.contains("open")) {
                plus[i].style.display = "none"
                minus[i].style.display = "block"
                paragraph[i].style.padding = "30px 0 20px 0"
            } else {
                plus[i].style.display = "block"
                minus[i].style.display = "none"
                paragraph[i].style.padding = ""
            }
    })
})