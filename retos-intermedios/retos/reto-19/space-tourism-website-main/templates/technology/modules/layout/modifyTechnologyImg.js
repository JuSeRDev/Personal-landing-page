export const modifyTechnologyImg = async (techObject, img, index) => {
    screen.width >= 768
        ? (img.src = `../../${techObject[index].images.portrait}`)
        : (img.src = `../../${techObject[index].images.landscape}`);
    img.alt = techObject[index].name;
};
