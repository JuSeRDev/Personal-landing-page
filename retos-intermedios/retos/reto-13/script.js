const allRead = document.querySelector(".all-read")
const count = document.querySelector(".count")
const notification = document.querySelectorAll(".notification")
const notificationActive = document.querySelectorAll(".notification-active")
const classActive = "notification-active"
let countArray = []

allRead.addEventListener("click", ()=>{
    count.innerHTML = "0"
    clearBackground(notification)
})

function clearBackground (param){
    param.forEach(noti => {
        noti.classList.remove(classActive)
    });
}

notification.forEach(noti => {
    if(noti.classList.contains(classActive)){
        countArray.push(1)
    }
    noti.addEventListener("click", ()=>{
        if (noti.classList.contains(classActive)) {
            noti.classList.remove(classActive)
            countArray.pop()
            count.innerHTML = `${countArray.length}`
        }
    })
});


