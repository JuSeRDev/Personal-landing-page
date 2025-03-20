const share = document.querySelector(".icon-share")
const share2 = document.querySelector(".icon-share2")
const infoShare = document.querySelector(".info-share")
const active = document.querySelector(".active")

share.addEventListener("click", ()=>{
    infoShare.classList.toggle("active")
})


share2.addEventListener("click", ()=>{
    infoShare.classList.toggle("active")
})