var Reto24;
(function (Reto24) {
    var hamburguer = document.querySelector('.hamburguer');
    var iconClose = document.querySelector('.icon-close');
    var nav = document.querySelector('nav');
    var liHeader = document.querySelectorAll(".li-header");
    var ulHeader = document.querySelectorAll(".ul-header");
    var arrow = document.querySelectorAll(".arrow");
    var activeNav = function (botton, hidden, visibility) {
        botton.addEventListener("click", function () {
            nav.style.display = hidden;
            hamburguer.style.display = visibility;
            iconClose.style.display = hidden;
        });
    };
    activeNav(hamburguer, "flex", "none");
    activeNav(iconClose, "none", "flex");
    var active = ["ul-header-active", "arrow-active"];
    liHeader.forEach(function (element, i) {
        element.addEventListener("click", function () {
            var isActive = ulHeader[i].classList.contains(active[0]);
            ulHeader.forEach(function (ul, ulIndex) {
                ul.classList.remove(active[0]);
                arrow[ulIndex].classList.remove(active[1]);
            });
            if (!isActive) {
                ulHeader[i].classList.add(active[0]);
                arrow[i].classList.add(active[1]);
            }
        });
    });
})(Reto24 || (Reto24 = {}));
