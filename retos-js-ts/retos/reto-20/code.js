var hamburguer = document.querySelector(".hamburguer");
var menu = document.querySelector(".menu");
hamburguer.addEventListener("click", function () {
    menu.classList.toggle("menu-active");
});
