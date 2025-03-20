const button = document.querySelector(".button")
const error = document.querySelector(".error")
const input = document.querySelector(".input-text")

const validate = ()=>{
    if (input.value.indexOf("@") === -1 || input.value.indexOf(".") === -1 ) {
        error.style.display = "flex"
        input.style.border = "1px solid var(--Light-Red)"
        if (window.innerWidth <= 600) { // Con esta condicion obligo a que lo que esta debajo solo funcione si el tamaño de pantalla es <= a 600px
            input.style.marginBottom = "30px"
        }
        console.log("codigo no enviado");
        return false
        
    } else{
        error.style.display = "none"
        console.log("codigo enviado");
        input.value = ""
        return true
    }
}

button.addEventListener("click", (e)=>{
    e.preventDefault()
    let error = validate()
    if (!error) {
        return false
    }
})