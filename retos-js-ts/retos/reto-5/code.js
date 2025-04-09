const inputName = document.querySelector(".name")
const inputLastName = document.querySelector(".last-name")
const inputEmail = document.querySelector(".email")
const inputPassword = document.querySelector(".password")
const inputSubmit = document.querySelector(".submit")

const errorName = document.querySelector(".error-name")
const errorLastName = document.querySelector(".error-lastName")
const errorEmail = document.querySelector(".error-email")
const errorPassword = document.querySelector(".error-password")

const errorImgName = document.querySelector(".error-img-name")
const errorImgLastName = document.querySelector(".error-img-lastName")
const errorImgEmail = document.querySelector(".error-img-email")
const errorImgPassword = document.querySelector(".error-img-password")


// const inputs = [inputName, inputLastName, inputEmail, inputPassword]
// const errors = [errorName, errorLastName, errorEmail, errorPassword]
// const errorImgs = [errorImgName, errorImgLastName, errorImgEmail, errorImgPassword]

const inputs = [inputName, inputLastName, inputEmail, inputPassword]
const errors = [errorName, errorLastName, errorEmail, errorPassword]
const errorImgs = [errorImgName, errorImgLastName, errorImgEmail, errorImgPassword]

const validateEmail = (email) => {
    const validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validate.test(email);
}


inputSubmit.addEventListener("click",(e)=>{
    let formValid = true
    
    inputs.forEach((input, i) => {
        if (input.value === "") {
            errors[i].style.height = "auto"
            errors[i].style.opacity = "1"
            errors[i].style.visibility = "visible"
            errorImgs[i].style.opacity = "1"
            errorImgs[i].style.visibility = "visible"
            formValid = false
        } else{
            errors[i].style.height = "0"
            errors[i].style.opacity = "0"
            errors[i].style.visibility = "hidden"
            errorImgs[i].style.opacity = "1"
            errorImgs[i].style.visibility = "hidden"
        }
    })

    if (!validateEmail(inputEmail.value)) {
        errorEmail.style.height = "auto";
        errorEmail.style.opacity = "1";
        errorEmail.style.visibility = "visible";
        errorImgEmail.style.opacity = "1";
        errorImgEmail.style.visibility = "visible";
        formValid = false;
    } else {
        errorEmail.style.height = "0";
        errorEmail.style.opacity = "0";
        errorEmail.style.visibility = "hidden";
        errorImgEmail.style.opacity = "0";
        errorImgEmail.style.visibility = "hidden";
    }

    if (!formValid) {
        e.preventDefault();
    }
    
})


// inputSubmit.addEventListener("click", (e)=>{
//     let formValid = true

//     inputs.forEach((error, i) => {
//         if (inputs[i].value === "") {
//         errors[i].style.height = "auto"
//         errors[i].style.opacity = "1"
//         errors[i].style.visibility = "visible"
//         errorImgs[i].style.opacity = "1"
//         errorImgs[i].style.visibility = "visible"
//         formValid = false
//         }else {
//         errors[i].style.height = "0"
//         errors[i].style.opacity = "0"
//         errors[i].style.visibility = "hidden"
//         errorImgs[i].style.opacity = "0"
//         errorImgs[i].style.visibility = "0"
//         }
//     });

//     if (!formValid) {
//         e.preventDefault()
//     }
// })

// inputSubmit.addEventListener("click", (e)=>{
//     for (let i = 0; i < inputs.length; i++) {
//         switch (true) {
//             case inputName.value === "":
//                 errorName.style.height = "auto"
//                 errorName.style.opacity = "1"
//                 errorName.style.visibility = "visible"
//                 errorImgName.style.opacity = "1"
//                 errorImgName.style.visibility = "visible"
//                 e.preventDefault()
//             case inputLastName.value === "":
//                 errorLastName.style.height = "auto"
//                 errorLastName.style.opacity = "1"
//                 errorLastName.style.visibility = "visible"
//                 errorImgLastName.style.opacity = "1"
//                 errorImgLastName.style.visibility = "visible"
//                 e.preventDefault()
//             case inputEmail.value === "":
//                 errorEmail.style.height = "auto"
//                 errorEmail.style.opacity = "1"
//                 errorEmail.style.visibility = "visible"
//                 errorImgEmail.style.opacity = "1"
//                 errorImgEmail.style.visibility = "visible"
//                 e.preventDefault()
//             case inputPassword.value ==="":
//                 errorPassword.style.height = "auto"
//                 errorPassword.style.opacity = "1"
//                 errorPassword.style.visibility = "visible"
//                 errorImgPassword.style.opacity = "1"
//                 errorImgPassword.style.visibility = "visible"
//                 e.preventDefault()
//                 break;
//             default:
//                 errorName.style.height = "0"
//                 errorName.style.opacity = "0"
//                 errorName.style.visibility = "hidden"
//                 errorImgName.style.opacity = "0"
//                 errorImgName.style.visibility = "hidden"
//                 break;
//         }
        
//     }
// })


// inputSubmit.addEventListener("click", ()=>{
//     if (inputName.value == ""){
//         errorName.style.height = "auto"
//         errorName.style.opacity = "1"
//         errorName.style.visibility = "visible"
//         errorImgName.style.opacity = "1"
//         errorImgName.style.visibility = "visible"
//     } else {
//         errorName.style.height = "0"
//         errorName.style.opacity = "0"
//         errorName.style.visibility = "hidden"
//         errorImgName.style.opacity = "0"
//         errorImgName.style.visibility = "hidden"
//     }
// })