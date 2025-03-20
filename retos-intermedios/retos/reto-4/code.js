const button = document.querySelector(".submit")
const email = document.querySelector(".email")
const messageError = document.querySelector(".message-error")
const errorIcon = document.querySelector(".error-icon")

const validate = ()=>{
    if (email.value.indexOf("@") ===-1 || email.value.indexOf(".com") === -1 || email.value.length < 5) {
        messageError.style.opacity = "1"
        messageError.style.visibility = "visible"
        errorIcon.style.opacity = "1"
        errorIcon.style.visibility = "visible"
        email.style.border = "1px solid var(--Soft-Red)"
        return false
    } else {
        messageError.style.opacity = "0"
        messageError.style.visibility = "hidden"
        errorIcon.style.opacity = "0"
        errorIcon.style.visibility = "hidden"
        email.style.border = "1px solid ar(--Desaturated-Red)"
        return true
    }
}


button.addEventListener("click",(e)=>{
    const isValid = validate()
    if (!isValid) {
        e.preventDefault()
        console.log(email.value);
        return false
    }
})