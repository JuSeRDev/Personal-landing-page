export const changeBgImg = (fileName, isHome) => {
    if(screen.width > 768) {
        isHome 
        ? 
        document.body.style.backgroundImage = `url(./space-tourism-website-main/assets/${fileName}/background-${fileName}-desktop.jpg)`
        : 
        document.body.style.backgroundImage = `url(../../assets/${fileName}/background-${fileName}-desktop.jpg)`
    }
    else if(screen.width < 768 && screen.width > 385) {
        isHome
        ? 
        document.body.style.backgroundImage = `url(./space-tourism-website-main/assets/${fileName}/background-${fileName}-tablet.jpg)`
        : 
        document.body.style.backgroundImage = `url(../../assets/${fileName}/background-${fileName}-tablet.jpg)`
    }
    else {
        isHome
        ? 
        document.body.style.backgroundImage = `url(./space-tourism-website-main/assets/${fileName}/background-${fileName}-mobile.jpg)`
        :
        document.body.style.backgroundImage = `url(../../assets/${fileName}/background-${fileName}-mobile.jpg)`
    }
}