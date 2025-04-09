export function displayMenu(closeMenu, items, menuImg, isClose, isHome) {
    if(isClose) {
        closeMenu.classList.toggle('list-mobile-close')
        items.classList.toggle('items-close')
        menuImg.classList.toggle('list-mobile-img-close')
        isHome 
        ? menuImg.src = './space-tourism-website-main/assets/shared/icon-hamburger.svg' 
        : menuImg.src = '../../assets/shared/icon-hamburger.svg'
        menuImg.alt = 'hamburger icon'
    }
    else {
        closeMenu.classList.toggle('list-mobile-close')
        items.classList.toggle('items-close')
        menuImg.classList.toggle('list-mobile-img-close')
        isHome 
        ? menuImg.src = './space-tourism-website-main/assets/shared/icon-close.svg'
        : menuImg.src = '../../assets/shared/icon-close.svg'
        menuImg.alt = 'close icon'
    }
}