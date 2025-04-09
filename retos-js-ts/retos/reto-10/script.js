const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const inputEmail = document.querySelector(".input-email")
const button = document.querySelector(".button")
const errorEmailText = document.querySelector(".error-email-text")
const confirmation = document.querySelector(".confirm-container")
const confirmMail = document.querySelector(".confirm-mail")

const functionValid = (e)=>{
    let email = inputEmail.value
    let emailValid = emailRegex.test(email)
    if (emailValid) {
        confirmation.style.display = "grid"
        confirmMail.innerHTML = email
        inputEmail.classList.remove("error-input")
        inputEmail.classList.remove("error-placeholder")
    } else {
        inputEmail.classList.add("error-input")
        inputEmail.classList.add("error-placeholder")
        errorEmailText.style.display = "block"
        e.preventDefault()
    }
}

button.addEventListener("click", functionValid)
inputEmail.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        e.preventDefault()
        functionValid(e)
    }
})